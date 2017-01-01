const q = require("q");

const IMAGE_SMALL_HEIGHT = 312;
const IMAGE_SMALL_WIDTH = 484;

function resizePicture(image) {
    let imgWidth, imgHeight;
    imgHeight = image.height;
    imgWidth = image.width;

    if ((imgHeight / imgWidth) > (IMAGE_SMALL_HEIGHT / IMAGE_SMALL_WIDTH)) {
        if (image.height > IMAGE_SMALL_HEIGHT) {
            imgWidth = imgWidth * IMAGE_SMALL_HEIGHT / imgHeight;
            imgHeight = IMAGE_SMALL_HEIGHT;
        }
    } else if (imgWidth > IMAGE_SMALL_WIDTH) {
        imgHeight = imgHeight * IMAGE_SMALL_WIDTH / imgWidth;
        imgWidth = IMAGE_SMALL_WIDTH;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, imgWidth, imgHeight);  // draw canvas image
    return canvas.toDataURL('image/jpeg');  // Convert canvas to jpeg url
}

function dataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

const utilsService = {
    imageToBytes(image) {
        const def = q.defer();
        // const reader = new FileReader();
        const file = image.files[0];

        var reader = new FileReader();
            reader.onload = function (e) {
                var img = new Image();
                img.onload = function () {
                    var resizeImg = resizePicture(this);
                    var blob = dataURItoBlob(resizeImg);
                    blob.lastModified = Math.round(Date.now() / 1000);
                    def.resolve({
                        image: resizeImg,
                        blob: blob
                    });
                };
                img.src = e.target.result;
            };
        reader.readAsDataURL(file);

        // reader.onloadend = () => {
        //     def.resolve(reader.result);
        // };

        reader.onerror = (error) => {
            def.reject(error)
        };  

        // reader.readAsDataURL(file);

        return def.promise;
    }
}

export default utilsService;
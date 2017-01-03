import eventEmitter from '../../../utils/event-emitter';
import commonConstants from '../../../constants/constants';

const { TOASTR: { ON_TOASTR_MESSAGE } } = commonConstants;

const toastrService = {
    show(options) {
        eventEmitter.emit(ON_TOASTR_MESSAGE, options);
    }
}

export default toastrService;
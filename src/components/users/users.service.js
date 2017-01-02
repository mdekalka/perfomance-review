import axios from 'axios';

const userConfig = {
    routes: {
        users: 'http://localhost:9000/usersApi/users'
    }
}

const userService = {
    users: [
        {
            id: 0,
            name: 'Titus Rust',
            title: 'Front-end developer',
            department: 'D10',
            room: '101',
            status: 'in_progress',
            mail: 'youknownothing@gmail.com',
            image: 'https://pp.vk.me/c322825/v322825456/6efe/emn1txC-4yM.jpg'
        },
        {
            id: 1,
            name: 'Cesar Friscia',
            title: 'Back-end developer',
            department: 'D7',
            room: '204',
            status: 'complete',
            mail: 'youknownothing@gmail.com',
            image: 'https://pp.vk.me/c322825/v322825456/6efe/emn1txC-4yM.jpg'
        },
        {
            id: 2,
            name: 'Kieth Dubuc',
            title: 'Front-end developer',
            department: 'D10',
            room: '105',
            status: 'not_active',
            mail: 'youknownothing@gmail.com',
            image: 'https://pp.vk.me/c322825/v322825456/6efe/emn1txC-4yM.jpg'
        },
        {
            id: 3,
            name: 'Waldo Kinner',
            title: 'QA engineer',
            department: 'D4',
            room: '504',
            status: 'complete',
            mail: 'youknownothing@gmail.com',
            image: 'https://pp.vk.me/c322825/v322825456/6efe/emn1txC-4yM.jpg'
        },
        {
            id: 4,
            name: 'Anton Rincon',
            title: 'Front-end developer',
            department: 'D10',
            room: '108',
            status: 'in_progress',
            mail: 'youknownothing@gmail.com',
            image: 'https://pp.vk.me/c322825/v322825456/6efe/emn1txC-4yM.jpg'
        }
    ],

    getDefinedUsers() {
        return this.users;
    },

    getUserById(userId) {
        const url = `${userConfig.routes.users}/${userId}`;

        return axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    getAllUsers() {
        const url = userConfig.routes.users;

        return axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    addMultipleUsers(users) {
        const url = `${userConfig.routes.users}/add`;

        return axios.post(url, { users: users }).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    addNewUser(user) {
        const url = userConfig.routes.users;

        return axios.post(url, { user: user }).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    removeUserById(userId) {
        const url = `${userConfig.routes.users}/${userId}`;

        return axios.delete(url).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    },

    updateUserById(userId, user) {
        const url = `${userConfig.routes.users}/${userId}`;

        return axios.put(url, { user: user }).then(response => {
            return response.data;
        }).catch(error => {
            throw new Error(error);
        });
    }
}

export default userService;
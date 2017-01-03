const keyMirror = require('keymirror');

const usersConstants = {
    ACTIONS: keyMirror({
        LOAD_USERS_START: null,
        LOAD_USERS_SUCCESS: null,
        LOAD_USERS_FAILED: null,
        ADD_NEW_USER: null,
        REMOVE_USER: null,
        UPDATE_USER: null
    }),
    STATUS_MAPPING: {
        'not_active': {
            id: 0,
            title: 'Not assigned',
            css: 'not-active'
        }, 
        'in_progress': {
            id: 1,
            title: 'In progress',
            css: 'in-progress'
        },
        'complete': {
            id: 2,
            title: 'Completed',
            css: 'complete'
        }
    }
};

export default usersConstants; 
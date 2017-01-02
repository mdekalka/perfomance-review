const usersConstants = {
    ACTIONS: {
        LOAD_USERS_START: 'LOAD_USERS_START',
        LOAD_USERS_SUCCESS: 'LOAD_USERS_SUCCESS',
        LOAD_USERS_FAILED: 'LOAD_USERS_FAILED',
        ADD_NEW_USER: 'ADD_NEW_USER',
        REMOVE_USER: 'REMOVE_USER',
        UPDATE_USER: 'UPDATE_USER'
    },
    STATUS_MAPPING: {
        'not_active': {
            title: 'Not assigned',
            css: 'not-active'
        }, 
        'in_progress': {
            title: 'In progress',
            css: 'in-progress'
        },
        'complete': {
            title: 'Completed',
            css: 'complete'
        }
    }
};

export default usersConstants; 
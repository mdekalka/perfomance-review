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
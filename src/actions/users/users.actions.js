import usersConstants from '../../components/users/users.constants';

const { LOAD_USERS_START,
        LOAD_USERS_SUCCESS,
        LOAD_USERS_FAILED,
        ADD_NEW_USER,
        REMOVE_USER,
        UPDATE_USER } = usersConstants.ACTIONS;

const loadUsers = () => {
    return {
        type: LOAD_USERS_START
    }
};

const loadUsersSuccess = (users) => {
    return {
        type: LOAD_USERS_SUCCESS,
        payload: users
    }
};

const loadUsersFailed = (error) => {
    return {
        type: LOAD_USERS_FAILED,
        payload: error
    }
}

const addNewUser = (user) => {
    return {
        type: ADD_NEW_USER,
        payload: user
    }
};

const removeUser = (userId) => {
    return {
        type: REMOVE_USER,
        payload: userId
    }
};

const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
};

export {
    loadUsers,
    loadUsersSuccess,
    loadUsersFailed,
    addNewUser,
    removeUser,
    updateUser
};
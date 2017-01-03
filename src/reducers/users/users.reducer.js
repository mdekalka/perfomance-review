import usersConstants from '../../components/users/users.constants';
import _ from 'lodash';

const { LOAD_USERS_START,
        LOAD_USERS_SUCCESS,
        LOAD_USERS_FAILED,
        ADD_NEW_USER,
        REMOVE_USER,
        UPDATE_USER } = usersConstants.ACTIONS;

const initialState = {
    users: [],
    isLoading: false,
    isFailed: false,
    errorMessage: ''
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_START:
            return {...state, isLoading: true};

        case LOAD_USERS_SUCCESS:
            return {...state, users: action.payload, isLoading: false};

        case LOAD_USERS_FAILED:
            return {...state, isLoading: false, isFailed: true, errorMessage: action.payload};

        case ADD_NEW_USER:
            return {...state, users: [...state.users, ...action.payload]};

        case REMOVE_USER:
            const updatedUsers = state.users.filter(users => {
                return users._id !== action.payload;
            });

            return {...state, users: updatedUsers, isLoading: false};

        case UPDATE_USER:
            const currentUsers = state.users.map(user => {
                if (user._id !== action.payload._id) {
                    return user;
                } else {
                    return {...user, ...action.payload};
                }
            });

            return {...state, users: currentUsers, isLoading: false};

        default:
            return state;
    }
}

export default usersReducer;
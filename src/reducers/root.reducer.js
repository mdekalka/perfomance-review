import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';
import usersReducer from './users/users.reducer';

const rootReducer = combineReducers({
    moviesList: moviesReducer,
    usersState: usersReducer
});

export default rootReducer;
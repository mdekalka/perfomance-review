import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';

const rootReducer = combineReducers({
    moviesList: moviesReducer
});

export default rootReducer;
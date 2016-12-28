import moviesConstants from '../../components/movies/movies.constants';

const { LOAD_MOVIES_START,
        LOAD_MOVIES_SUCCESS,
        LOAD_MOVIES_FAILED,
        ADD_NEW_MOVIE } = moviesConstants;

const loadMovies = () => {
    return {
        type: LOAD_MOVIES_START
    }
};

const loadMoviesSuccess = (movies) => {
    return {
        type: LOAD_MOVIES_SUCCESS,
        payload: movies
    }
};

const loadMoviesFailed = (error) => {
    return {
        type: LOAD_MOVIES_FAILED,
        payload: error
    }
}

const addNewMovie = (movie) => {
    return {
        type: ADD_NEW_MOVIE,
        payload: movie
    }
};

export {
    loadMovies,
    loadMoviesSuccess,
    loadMoviesFailed,
    addNewMovie
};
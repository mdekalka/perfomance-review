import moviesConstants from '../../components/movies/movies.constants';

const { LOAD_MOVIES_START,
        LOAD_MOVIES_SUCCESS,
        LOAD_MOVIES_FAILED,
        ADD_NEW_MOVIE,
        REMOVE_MOVIE,
        UPDATE_MOVIE } = moviesConstants;

const initialState = {
    movies: [],
    isLoading: false,
    isFailed: false,
    errorMessage: ''
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MOVIES_START:
            return {...state, isLoading: true};

        case LOAD_MOVIES_SUCCESS:
            return {...state, movies: action.payload, isLoading: false};

        case LOAD_MOVIES_FAILED:
            return {...state, isLoading: false, isFailed: true, errorMessage: action.payload};

        case ADD_NEW_MOVIE:
            return {...state, movies: [...state.movies, action.payload]};

        case REMOVE_MOVIE:
            const updatedMovies = state.movies.filter(movie => {
                return movie._id !== action.payload;
            });

            return {...state, movies: updatedMovies, isLoading: false};

        case UPDATE_MOVIE:
            const currentMovies = state.movies.map(movie => {
                if (movie._id !== action.payload._id) {
                    return movie;
                } else {
                    return {...movie, ...action.payload};
                }
            });

            return {...state, movies: currentMovies, isLoading: false};

        default:
            return state;
    }
}

export default moviesReducer;
import moviesConstants from '../../components/movies/movies.constants';

const { LOAD_MOVIES_START,
        LOAD_MOVIES_SUCCESS,
        LOAD_MOVIES_FAILED,
        ADD_NEW_MOVIE } = moviesConstants;

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

        default:
            return state;
    }
}

export default moviesReducer;
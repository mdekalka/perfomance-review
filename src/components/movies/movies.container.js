import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import moviesService from './movies.service';
import * as moviesActions from '../../actions/movies/movies.actions';
import MoviesAdd from './movies-add/movies-add.component';
import MoviesList from './movies-list/movies-list.component';
import MovieProfile from './movie-profile/movie.profile.component';


class MoviesContainer extends Component {
    constructor(props) {
        super(props);

        this.loadMovies = props.moviesActions.loadMovies;
        this.loadMoviesSuccess = props.moviesActions.loadMoviesSuccess;
        this.loadMoviesFailed = props.moviesActions.loadMoviesFailed;
        this.addNewMovie = props.moviesActions.addNewMovie;
        this.removeMovie = props.moviesActions.removeMovie;
        this.updateMovie = props.moviesActions.updateMovie;

        this.state = {
            activeMovieId: null
        };
    }

    componentDidMount() {
        this.getMoviesList();
    }

    getMoviesList() {
        this.loadMovies();

        moviesService.getMoviesList().then((movies) => {
            this.loadMoviesSuccess(movies);
        })
        .catch((err) => {
            this.loadMoviesFailed(err);
            console.log(err);
        });
    }

    addMovie(movie) {
        this.loadMovies();

        moviesService.addNewMovie(movie).then((movieData) => {
            this.addNewMovie(movieData.movie);
        })
        .catch((err) => {
            this.loadMoviesFailed(err);
            console.log(err);
        })
    }

    removeMovieById = (movieId) => {
        this.loadMovies();

        moviesService.removeMovieById(movieId).then(movie => {
            this.removeMovie(movie.id);
        })
        .catch((err) => {
            this.loadMoviesFailed(err);
            console.log(err);
        })
    }

    updateMovieById = (movieId, updatedMovie) => {
        this.loadMovies();

        moviesService.updateMovieById(movieId, updatedMovie).then(movieInfo => {
            this.updateMovie(movieInfo.movie);
        })
        .catch((err) => {
            this.loadMoviesFailed(err);
            console.log(err);
        });
    }

    getMovieById(id) {
        moviesService.getMovieById(id).then(movie => {
            this.setState({activeMovieId: movie._id});
        })
        .catch(err => {
            console.log(err);
        })
    }

    onSubmit = (newMovie) => {
        this.addMovie(newMovie);
    }

    onMovieLoad = (movieId) => {
        this.getMovieById(movieId);
    }

    setActiveMovie(movies, id) {
        return movies.find(movie => {
            return movie._id === id;
        }) || {};
    }

    render() {
        const { movies } = this.props;
        const activeMovie = this.setActiveMovie(movies, this.state.activeMovieId);

        return (
            <div className="container">
                <div className="row">
                    <h2>Movies list container</h2>
                    <div className="col-md-4">
                        <MoviesAdd
                            header={'New movie form'}
                            buttonLabel={'Add new movie'}
                            onChange={this.onChange}
                            onSubmit={this.onSubmit}>
                        </MoviesAdd>
                    </div>
                    <div className="col-md-4">
                        <MoviesList
                            header={'Movies list'}
                            movie={activeMovie}
                            onLoad={this.onMovieLoad}
                            onRemove={this.removeMovieById}
                            movies={movies}>
                        </MoviesList>
                    </div>
                    <div className="col-md-4">
                        <MovieProfile
                            header={'Select a profile'}
                            onUpdate={this.updateMovieById}
                            movie={activeMovie}>
                        </MovieProfile>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesList.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch)
    }
}

MoviesContainer = connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

export default MoviesContainer;
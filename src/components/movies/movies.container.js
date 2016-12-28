import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import moviesService from './movies.service';
import * as moviesActions from '../../actions/movies/movies.actions';
import MoviesAdd from './movies-add/movies-add.component';
import MoviesList from './movies-list/movies-list.component';


class MoviesContainer extends Component {
    constructor(props) {
        super(props);

        this.loadMovies = props.moviesActions.loadMovies;
        this.loadMoviesSuccess = props.moviesActions.loadMoviesSuccess;
        this.loadMoviesFailed = props.moviesActions.loadMoviesFailed;
        this.addNewMovie = props.moviesActions.addNewMovie;

        

        this.state = {
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

    onSubmit = (newMovie) => {
        const { addNewMovie } = this.props.moviesActions;

        this.addMovie(newMovie);
    }

    render() {
        const { movies } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <h2>Movies list container</h2>
                    <div className="col-md-6">
                        <MoviesAdd
                            header={'New movie form'}
                            buttonLabel={'Add new movie'}
                            model={this.state.movieModel}
                            onChange={this.onChange}
                            onSubmit={this.onSubmit}>
                        </MoviesAdd>
                    </div>
                    <div className="col-md-6">
                        <MoviesList
                            header={'Movies list'} 
                            movies={movies}>
                        </MoviesList>
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
import React from 'react';
import { Link } from 'react-router'

const MoviesList = ({ header, movies }) => {
    const renderMovies = (movies) => {
        if (movies && movies.length) {
            const renderMovies = movies.map((movie) => {
                return (
                    <div className="list-group-item" key={movie._id}>
                        <Link to={'/movies/movie/' + movie.id}>{movie.title}</Link>
                    </div>
                )
            });

            return (
                <ul className="list-group movies-container">
                    {renderMovies}
                </ul>
            )
        } else {
            return null;
        }
    }

    return (
        <div>
            <h3>{header}</h3>
            {renderMovies(movies)}
        </div>
    )
}

export default MoviesList;
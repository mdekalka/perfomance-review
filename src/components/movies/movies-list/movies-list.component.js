import React from 'react';
import classNames from 'classnames';

import './movies-list.component.css';

const MoviesList = ({ header, movie, movies, onLoad, onRemove }) => {
    const renderMovies = (movies) => {
        if (movies && movies.length) {
            const renderMovies = movies.map((currentMovie) => {
                const linkClass = classNames({
                    'list-group-item': true,
                    'active': movie._id === currentMovie._id
                });

                return (
                    <li key={currentMovie._id}>
                        <a className={linkClass} onClick={() => {onLoad(currentMovie._id)}}>
                            {currentMovie.title}
                        </a>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            onRemove(currentMovie._id)
                        }}>Remove</button>
                    </li>
                )
            });

            return (
                <ul className="list-group movies-list">
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
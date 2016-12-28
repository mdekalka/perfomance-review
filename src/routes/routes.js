import React from 'react';
import { Router, Route, IndexRoute , browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../configs/configStore';

import App from '../App';
import MoviesContainer from '../components/movies/movies.container';
import MovieContainer from '../components/movies/movie/movie.container';


const routes = (
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={MoviesContainer} />
                <Route path="/movies/movie/:id" component={MovieContainer}/>
            </Route>
        </Router>
    </Provider>
);

export default routes;
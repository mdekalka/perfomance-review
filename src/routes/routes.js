import React from 'react';
import { Router, Route, IndexRoute , browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../configs/configStore';

import App from '../App';
import MoviesContainer from '../components/movies/movies.container';

const routes = (
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={MoviesContainer} />
            </Route>
        </Router>
    </Provider>
);

export default routes;
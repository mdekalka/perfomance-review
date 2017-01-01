import React from 'react';
import { Router, Route, IndexRoute , browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../configs/configStore';

import App from '../App';
import MoviesContainer from '../components/movies/movies.container';
import Users from '../components/users/users.container';

// <IndexRoute component={MoviesContainer} />
const routes = (
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Users} />
            </Route>
        </Router>
    </Provider>
);

export default routes;
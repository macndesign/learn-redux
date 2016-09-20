import React from 'react';
import { render } from 'react-dom';

// CSS
import css from './styles/style.styl';

// Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Sentry
// import Raven from 'raven-js';
// import { sentry_url, logException } from './data/config';

// Raven.config(sentry_url, {
//     tags: {
//         git_commit: 'asdfghj667uy',
//         userLevel: 'editor'
//     }
// }).install();
//
// logException(new Error('download failed!'), {
//     email: 'macndesign@gmail.com'
// });

// Raven.captureMessage('Something bad happened!');
// Raven.showReportDialog();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}/>
                <Route path="/view/:postId" component={Single}/>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));

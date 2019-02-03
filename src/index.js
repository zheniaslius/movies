import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

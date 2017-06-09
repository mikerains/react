import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/CSS/bootstrap.min.css';

    ReactDOM.render(
            <Router history={browserHistory} routes={routes} /> ,
            document.getElementById('app')
        );

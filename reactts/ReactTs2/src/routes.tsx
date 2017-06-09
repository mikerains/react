// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

//export class Router extends React.Component<undefined, undefined> {
//    render() {
//        return (
//            <Route path="/" component={App}>
//                <IndexRoute component={HomePage} />
//                <Route path="about" component={AboutPage}/>
//            </Route>
//        );
//    };
//}

//export default Router;

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
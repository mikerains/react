// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { Link } from "react-router";
import * as ReactRouter from 'react-router';

export interface IHomePageProps { compiler: string; framework: string; }

export class HomePage extends React.Component<IHomePageProps, undefined> {
    render() {
        return (
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>A Sample Page</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
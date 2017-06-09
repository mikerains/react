// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { Link } from "react-router";
import * as ReactRouter from 'react-router';

export interface IAboutPageProps  { compiler: string; framework: string; }

export class AboutPage extends React.Component<IAboutPageProps, undefined> {
    render() {
        return (
            <div className="jumbotron" >
                <h1>About </h1>
                <p> All about something</p>
                <Link to="/" className="btn btn-primary btn-lg" > Learn more</Link>
            </div>
        );
    }
}
export default AboutPage;
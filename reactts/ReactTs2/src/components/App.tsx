// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { PropTypes } from 'react';
import * as ReactRouter from 'react-router';

interface AppPropTypes  { children: any };

export class App extends React.Component<AppPropTypes, {}> {

    render() {
        return (
            <div className="container-fluid">
                <p>NAVIGATION</p>
                {this.props.children}
            </div>
        );
    };
}

export default App;
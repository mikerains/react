﻿import * as React from 'react';
import * as ReactDOM from "react-dom";
import { UIView } from 'ui-router-react';

export class Reddit extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }


    componentDidMount() {
        if (!!this.props) {
            //do something with props
        }
    }

    render() {
        return (
            <div>
                <h2>REDDIT</h2>
                <UIView/>
            </div>
        )
    }
}
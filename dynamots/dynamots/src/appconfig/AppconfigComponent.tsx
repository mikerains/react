import * as React from 'react';
import * as ReactDOM from "react-dom";

export class Appconfig extends React.Component<any, any> {
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
                <h2>APP CONFIG</h2>
                <h3>{this.props.term}</h3>
            </div>
        )
    }
}
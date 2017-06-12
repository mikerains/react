import * as React from 'react';
import * as ReactDOM from "react-dom";

export class RedditChild extends React.Component<any, any> {
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
            <h3>{this.props.resolves.term}</h3>
        )
    }
}
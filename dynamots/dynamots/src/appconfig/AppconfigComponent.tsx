import * as React from 'react';
import * as ReactDOM from "react-dom";



export class Appconfig extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    // propTypes = {
    //     resolves: PropTypes.shape({
    //         people: PropTypes.arrayOf(PropTypes.object)
    //     })
    // }

    componentDidMount() {
        if (!!this.props) {
            //do something with props
        }
    }

    render() {
        let term = null;
        if (this.props.resolves && this.props.resolves.term) {
            term = this.props.resolves.term["Project1"];
        }
        return (
            <div>
                <h2>APP CONFIG</h2>
                <div>
                Term(1):
                {
                <h3>{term}</h3>
                }
                </div>
                <div>
                    Term(2):
                    {this.props.resolves && this.props.resolves.term &&
                        <h3>{this.props.resolves.term["Project1"]}</h3>
                    }
                </div>
            </div>
        )
    }
}
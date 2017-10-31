import React from 'react';
import './terminal.css';


class Terminal extends React.Component {

    move = () => {
        if (this.state.left === 'calc(-30% - 1px)') {
            this.setState({left: '0'})
        }
        else {
            this.setState({left: 'calc(-30% - 1px)'})
        }

    };

    constructor(props) {
        super(props);
        this.state = {
            left: '0',
        }
    }

    render() {
        return (<div id='term' style={{left: this.state.left}} onClick={this.move}>
            {this.state.left}
        </div>);
    }
}

export default Terminal;
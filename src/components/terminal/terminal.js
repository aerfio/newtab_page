import React from 'react';
import './terminal.css';


class Terminal extends React.Component {
    // move = () => {
    //     this.props.onClick();
    //     if (this.state.left === 'calc(-30% - 1px)') {
    //         this.setState({left: '0'})
    //
    //     }
    //     else {
    //         this.setState({left: 'calc(-30% - 1px)'})
    //     }
    //
    // };

    constructor(props) {
        super(props);
        this.state = {
            // left: 'calc(-30% - 1px)',
            // left:'calc(-30% - 1px)',
        }
    }

    render() {
        let text;
        switch (this.props.value) {
            case '0': {
                // this.setState({left: 'calc(-30% - 1px)'});
                text = '-30%';
                console.log('0 term');
                break;
            }
            case '1': {
                // this.setState({left: '0'});
                text = '0';
                console.log('1 term');
                break;
            }
            default: {
                text = '-30%';
                console.log(this.props.value === 0);
                break;
            }
        }
        return (<div id='term' style={{left: text}}>
            {text + "+propsy: " + this.props.value}
        </div>);
    }

}

// onClick={()=>{this.move()}}
export default Terminal;
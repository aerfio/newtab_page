import React from 'react';
import './terminal.css';


class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static focusHere() {
        document.getElementById('terminal').focus();
    }

    handleChange(event) {
        let text = event.target.value.substring(1);
        this.setState({value: text});
    }

    handleSubmit(event) {
        event.preventDefault();
        switch (this.state.value) {
            case 'help': {
                this.setState({value: this.state.value + 'lol'});
                break;
            }
            default: {
                this.setState({value: ""});
                break;
            }
        }
    }

    render() {
        let text;
        switch (this.props.value) {
            case '0': {
                text = '-30%';
                console.log('0 term');
                break;
            }
            case '1': {
                text = '0';
                Terminal.focusHere();
                console.log('1 term');

                break;
            }
            default: {
                text = '-30%';
                console.log(this.props.value === 0);
                break;
            }
        }

        return (<div id='termDiv' style={{left: text}}>
            <form onSubmit={this.handleSubmit}><input placeholder={'Search'} id='terminal' type="text"
                                                      value={'>' + this.state.value}
                                                      onChange={this.handleChange}/></form>
        </div>);
    }

}

export default Terminal;
import React from 'react';
import './clock.css'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    fixedTime(i) {
        return i < 10 ? ('0' + i) : i;
    }

    render() {
        return (
            <h1 className="clock">{this.fixedTime(this.state.date.getHours()) + ':' + this.fixedTime(this.state.date.getMinutes())}</h1>

        );
    }
}

export default Clock;
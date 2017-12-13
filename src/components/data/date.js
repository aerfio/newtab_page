import React from 'react';
import './date.css';

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    render() {
        let today = this.state.date;
        let comma = today.toLocaleTimeString('pl-pl', {month: 'long'}).indexOf(',');
       // let month = today.toLocaleDateString('pl-pl',{weekday: 'long'}).substring(0, comma);
        let month = today.toLocaleTimeString('pl-pl', {month: 'long'}).substring(0, comma);

        return (
            <h1 id="data">{today.getDate() + " " + month}</h1>
        );
    }
}

export default Today;
import React from 'react';
import moment from 'moment'

import './date.css';
import 'moment/locale/pl';

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    render() {

        let today = moment().format('LL').substr(0, moment().format('LL').length - 4);

        return (
            <h1 id="data">{today}</h1>
        );
    }
}

export default Today;
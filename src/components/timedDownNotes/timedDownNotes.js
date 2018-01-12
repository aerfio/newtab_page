import React from 'react';
import './timedDownNotes.css';

class TimedDownNotes extends React.Component {
    constructor() {
        super();
        this.state = {
            array: [],
        }
    }

    render() {
        return (<div id='TimedDownNotesContainer'>
            <button id="plus" onClick={() => {
                this.setState({
                    array: [...this.state.array, 2]
                })
            }}/>
            {this.state.array.map((number, index) => (<textarea key={index} value={number}/>))}
        </div>)
    }
}

export default TimedDownNotes;
import React from 'react';
import './timedDownNotes.css';
import Textarea from "react-textarea-autosize";

class TimedDownNotes extends React.Component {
    constructor() {
        super();
        this.state = {
            array: [],
            opened: false,
        }
    }

    render() {
        let tempTab = Array.of(2, 2, 2, 2, 2, 2);

        tempTab.sort((a, b) => a - b);

        return (<div id='TimedDownNotesContainer'>
            <button id="plus" onClick={() => {
                tempTab.push(2);
                console.log(tempTab.toString());
                this.setState({
                    opened: !this.state.opened
                })
            }}/>
            {this.state.opened && tempTab.map((number, index) => (
                <div key={index} className='longNote'><Textarea value={number.toString()} className={'longNoteText'}/>
                </div>
            ))}
        </div>)
    }
}

export default TimedDownNotes;
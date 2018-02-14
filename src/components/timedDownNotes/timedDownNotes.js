import React from 'react';
import './timedDownNotes.css';
import Textarea from "react-textarea-autosize";
import '../todo/css/fontello.css'

class TimedDownNotes extends React.Component {
    getMax = () => {
        let max = 0;
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).includes('date')) {
                if (localStorage.key(i).substr(0, localStorage.key(i).length - 4) > max) {
                    console.log(parseInt(localStorage.key(i), 10));
                    max = localStorage.key(i);
                }
            }
        }
        return parseInt(max, 10);
    };
    rtrnLocStr = () => {
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.key(i))
        }
    };
    handleChange = (event) => {
        this.setState({value: event.target.value});
    };
    handleSubmit = (event) => {
        let tmp = this.getMax() + 1;
        localStorage.setItem(tmp + 'date', this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    };

    constructor() {
        super();
        this.state = {
            array: [2, 2, 2, 2, 2, 2],
            opened: false,
            value: '',
        }
    }

    render() {
        let tempTab = Array.of();
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).includes('date'))
                tempTab.push(localStorage.key(i));
        }
        tempTab.sort((a, b) => a - b);

        return (
            <div id='TimedDownNotesContainer'>
                <div id={'plus'} onClick={() => {
                this.setState({
                    opened: !this.state.opened
                })
                }}>{'+'}</div>
                {this.state.opened && <form id={'LongNotesForm'} onSubmit={this.handleSubmit}>
                    <input autoComplete={'off'} autoFocus={'true'} autoCorrect={'off'} spellCheck={'false'}
                           id='LongNotesInput' placeholder={'Type here...'} type="text"
                           value={this.state.value}
                           onChange={this.handleChange}/>
                </form>}
            {this.state.opened && tempTab.map((number, index) => (
                <div className={'outerNotes'} key={number}>
                        <Textarea className={'LongNotesText'} unselectable={'on'} readOnly={'true'}
                                  autoCorrect={'off'} //Textarea, and not build in textarea, coz this component can autosize to text; bult in element cannot do this
                                  spellCheck={'false'}
                                  value={localStorage.getItem(tempTab[index])}
                        />
                    <div className={'LongTodoButton'} onClick={() => {
                        localStorage.removeItem(tempTab[index]);
                        this.setState({value: ''});
                    }}>{<i className="icon-trash-1">{}</i>}
                    </div>
                </div>
            ))}
        </div>)
    }
}

export default TimedDownNotes;
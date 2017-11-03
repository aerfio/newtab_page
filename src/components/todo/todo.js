import Cookies from 'universal-cookie';
import React from 'react';
import './todo.css'

const cookies = new Cookies();
const max = new Cookies();

class TodoBox extends React.Component {

    maxLen = (number) => {
        if (max.get(0) == null || !Number.isInteger(max.get(0))) {
            max.set(0, 0, {path: '/'});
            console.log('line 17');
        }
        console.log('get0' + max.get(0) + 'number: ' + number);

        if (number > max.get(0)) {
            max.set(0, number, {path: '/'});
            return number;
        }
        else {
            return -1;
        }
    };
    handleChange = (event) => {
        this.setState({value: event.target.value});

    };
    handleSubmit = (event) => {
        let length = Object.keys(cookies.getAll()).length;
        cookies.set(length, this.state.value, {path: '/'});
        this.maxLen(length + 1);
        this.setState({value: ''});
        event.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <div id={'todo'}>
                <form onSubmit={this.handleSubmit}>
                    <input autoComplete={'off'} autoFocus={'true'} id='notesInput' type="text"
                           value={this.state.value}
                           onChange={this.handleChange}/>
                </form>
                {Object.keys(cookies.getAll()).length > 0 && Object.keys(cookies.getAll()).map((number, index) => <div
                    key={index}>{number}</div>)}
                <button onClick={() => {
                    console.log('53: maxget0: ' + max.get(0));
                    for (let i = 0; i < max.get(0); i++) {
                        cookies.remove(i);
                    }
                    this.setState({value: ''});
                }}>{'usun wszystkie notatki'}</button>
            </div>
        );
    }
}

export default TodoBox;
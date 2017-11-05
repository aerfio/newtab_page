import Cookies from 'universal-cookie';
import React from 'react';
import './todo.css'

const cookies = new Cookies();
const max = new Cookies();

class TodoBox extends React.Component {
    maxLen = (number) => {
        if (max.get(0) == null || !Number.isInteger(max.get(0))) {
            max.set(0, 0, {path: '/'});
        }
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
        //console.log(cookies.getAll());
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

// <div className={'noteText'}>{'note #'+(index+1)+': '+cookies.get(number)}</div>
    render() {
        return (
            <div id={'todo'}>
                <form id={'todoForm'} onSubmit={this.handleSubmit}>
                    <input autoComplete={'off'} autoFocus={'true'} id='notesInput' type="text"
                           value={this.state.value}
                           onChange={this.handleChange}/>
                </form>
                {/*fucking magic below: map all of the cookies to div but for the first one, which is probably implemented to show number of all cookies in object*/}
                {Object.keys(cookies.getAll()).slice(1, Object.keys(cookies.getAll()).length).map((number, index) =>
                    <div className={'outerDivTodo'} key={index}>
                        <textarea className={'noteText'} unselectable={'on'} readOnly={'true'} autoCorrect={'off'}
                                  spellCheck={'false'} value={'note #' + (index + 1) + ': ' + cookies.get(number)}/>
                        <div className={'todoButton'} onClick={() => {
                            cookies.remove(number);
                            this.setState({value: ''});
                        }}>{'X'}</div>
                    </div>)
                }
            </div>
        );
    }
}

export default TodoBox;
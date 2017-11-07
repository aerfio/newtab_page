import React from 'react';
import './todo.css'
import './css/fontello.css'


class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            max: 0,
        }
    }

    getMax = () => {
        let max = 0;
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) > max) {
                max = localStorage.key(i);
            }
        }
        return parseInt(max,10);
    };
    handleChange = (event) => {
        this.setState({value: event.target.value});
    };
    handleSubmit = (event) => {
        localStorage.setItem((this.getMax()+1), this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    };


// <div className={'noteText'}>{'note #'+(index+1)+': '+cookies.get(number)}</div>
    render() {
        let tempTab = Array.of();
        for (let i = 0; i < localStorage.length; i++) {
            tempTab.push(localStorage.key(i));
        }
        return (
            <div id={'todo'}>
                <button onClick={() => {
                    for (let i = 0; i < tempTab.length; i++) {
                        console.log('tempTab['+i+']='+tempTab[i]+';localStorage.getItem('+tempTab[i]+')='+localStorage.getItem(localStorage.key(i)));
                    }
                }}>{'temptab'}</button>

                <button onClick={() => localStorage.clear()}>{'clear'}</button>
                <form id={'todoForm'} onSubmit={this.handleSubmit}>
                    <input autoComplete={'off'} autoFocus={'true'} id='notesInput' placeholder={'Notes'} type="text"
                           value={this.state.value}
                           onChange={this.handleChange}/>
                </form>
                {tempTab.map((number,index) =>
                    <div className={'outerDivTodo'} key={number}>
                        <textarea className={'noteText'} unselectable={'on'} readOnly={'true'} autoCorrect={'off'}
                                  spellCheck={'false'}

                                  value={'num: ' + number + '; index: ' +index+': ' +localStorage.getItem(tempTab[index])}/>

                        <div className={'todoButton'} onClick={() => {
                            localStorage.removeItem(tempTab[index]);
                            console.log('number of removed item: '+number);
                            this.setState({value: ''});
                        }}>{<i className="icon-trash-1">{}</i>}</div>
                    </div>)
                }
            </div>
        );
    }
}

export default TodoBox;
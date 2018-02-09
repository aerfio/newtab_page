import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Clock from './components/clock/clock'
import Today from './components/data/date'
import Searchbar from './components/searchbar/searchbar'
import Plan from './components/plan/plan'
import Terminal from './components/terminal/terminal'
import TodoBox from './components/todo/todo'
import AnimateOnChange from 'react-animate-on-change'
import * as link from './modules/links/links'


function Anim (props){
    return <AnimateOnChange
        baseClassName="message"
        animationClassName="message-clicked"
        animate={true}>
        {props.value}
    </AnimateOnChange>
}


class RedirectRectangle extends React.Component {
    constructor(props){
    super(props);
    this.state={
        on:0,
    }
    }
    render() {
        let personalTab = Array.of(link.headers[0], link.one[0], link.two[0], link.three[0], link.four[0], link.five[0]);
        let personalLinks = Array.of(link.one[1], link.two[1], link.three[1], link.four[1], link.five[1]);

        let stuffTab = Array.of(link.headers[1], link.six[0], link.seven[0], link.eight[0], link.nine[0], link.ten[0]);
        let stuffLinks = Array.of(link.six[1], link.seven[1], link.eight[1], link.nine[1], link.ten[1]);
        let page;
        let links;
        switch (this.props.value) {
            case 0:
                page = personalTab;
                links = personalLinks;
                break;
            case 1:
                page = stuffTab;
                links = stuffLinks;
                break;

            default:
                page = personalTab;
                links = personalLinks;
                break;
        }

        if(this.props.value !==2){
        return (
            <div className="square">
                <h1 className='header'>{<Anim value={page[0]}/>}</h1>
                <ul>
                            <li><a href={links[0]}>{<Anim value ={page[1]}/>}</a></li>
                            <li><a href={links[1]}>{<Anim value ={page[2]}/>}</a></li>
                            <li><a href={links[2]}>{<Anim value ={page[3]}/>}</a></li>
                            <li><a href={links[3]}>{<Anim value ={page[4]}/>}</a></li>
                            <li><a href={links[4]}>{<Anim value ={page[5]}/>}</a></li>
                </ul>
            </div>
        );

        }
        else{
            return (
                    <TodoBox/>
            );
        }
    }
}

class NavButton extends React.Component {

    render() {
        return (
            <div id='navbutton' onClick={() => this.props.onClick()}>{this.props.text}</div>
        );
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render() {

        return (
            <div id='navdiv'>
                <div id='navbar'>
                    <NavButton text={'Personal'} onClick={() => this.setState({value: 0})}/>
                    <NavButton text={'Stuff'} onClick={() => this.setState({value: 1})}/>
                    <NavButton text={'Todo'} onClick={() => this.setState({value: 2})}/>
                </div>
                <RedirectRectangle value={this.state.value}/>

            </div>
        );
    }
}


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '0',
        }
    }

    render() {
        //TODO firebase deploy corrent vrsio without database
        return (
            <div className="game">
                <Terminal value={this.state.value}  onSubmit={() => {this.setState({value: this.state.value === '0' ? '1' : '0'})
                }}/>
                <Plan/>
                <Today/>
                <Clock/>
                <Searchbar
                    value={this.state.value}
                    onSubmit={() => {
                        this.setState({value: this.state.value === '0' ? '1' : '0'})
                }}/>
                <NavBar/>
            </div>
        );
    }
}


ReactDOM.render(
    <Game/>,

    document.getElementById('root')
);

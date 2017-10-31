import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Clock from './components/clock/clock'
import Today from './components/data/date'
import Searchbar from './components/searchbar/searchbar'
import Plan from './components/plan/plan'
import Terminal from './components/terminal/terminal'

class Square extends React.Component {
    render() {
        let personalTab = Array.of('Personal', 'Fagbook', 'Onet', 'ImgSearch', 'Trello', 'dumblr');
        let personalLinks = Array.of('https://www.facebook.com/home.php', 'http://www.onet.pl', 'https://images.google.com/', 'https://trello.com/b/v9HDsFRa/2do', 'http://mywallofnoise.tumblr.com/');

        let stuffTab = Array.of('Stuff', '/wg/', '/mu/', 'Google Pogoda', 'Google Drive', 'Studia rau1');
        let stuffLinks = Array.of('https://boards.4chan.org/wg/', 'https://boards.4chan.org/mu/', 'https://www.google.pl/#q=pogoda', 'https://drive.google.com/drive/my-drive', 'https://platforma.polsl.pl/rau1/course/index.php?categoryid=26');
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
        return (
            <div className="square">
                <h1 className='header'>{page[0]}</h1>
                <ul>
                    <li><a href={links[0]}>{page[1]}</a></li>
                    <li><a href={links[1]}>{page[2]}</a></li>
                    <li><a href={links[2]}>{page[3]}</a></li>
                    <li><a href={links[3]}>{page[4]}</a></li>
                    <li><a href={links[4]}>{page[5]}</a></li>
                </ul>
            </div>
        );
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
                <div id='navbar' onClick={() => this.props.onClick()}>
                    <NavButton text={'Personal'} onClick={() => this.setState({value: 0})}/>
                    <NavButton text={'Stuff'} onClick={() => this.setState({value: 1})}/>
                </div>
                <Square value={this.state.value}/>
            </div>
        );
    }
}


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        }
    }

    render() {
        return (
            <div className="game">
                <Terminal value={this.state.value}/>
                <Plan/>
                <Today/>
                <Clock/>
                <Searchbar/>
                <NavBar onClick={() => {
                    this.setState({value: 23});
                    console.log('click')
                }}/>
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);

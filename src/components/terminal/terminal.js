import React from 'react';
import './terminal.css';
import request from 'request';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textA: '',
            value: '',
            weather: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static focusHere() {
        document.getElementById('terminal').focus();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        switch (this.state.value) {
            case 'help': {
                this.setState({textA: 'List of avalaible commands:\nw - weather\nmu - redirect to 4chan /mu/ board\nrau1 - Studies'});
                this.setState({value: ""});
                break;
            }
            case 'w':
            {
                this.setState({textA: this.getWeather()});
                this.setState({value: ""});
                break;
            }
            case 'mu':{
                window.location.assign('https://boards.4chan.org/mu/');
                event.preventDefault();
                this.setState({value: "",textA:''});
                break;
            }
            case 'rau1':{
                window.location.assign('https://platforma.polsl.pl/rau1/course/index.php?categoryid=26');
                event.preventDefault();
                this.setState({value: ""});
                break;
            }
            case 'exit':{
                document.getElementById('searchbar').focus();
                this.props.onSubmit();
                this.setState({value: "", textA: ''});
                break;
            }
            default: {
                this.setState({value: "",textA: 'No such command, try again.'});
                break;
            }
        }
    }

    getWeather(){
        let apiKey = 'af6eccccbe9e42573102a3f5a16ceb48';
        let city = 'Gliwice';
        let url = 'http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric&appid=' + apiKey;
        // eslint-disable-next-line
        let openWeather = '';
        request.get(url, function (err, res, body) {
            if (err) {
                console.log('error ');
            } else {
                console.log('ima here');
                /*todo get why the fuck does it work that way*/
               openWeather=JSON.parse(body);
               console.log(openWeather);
            }
        });
        //why the hell does it not work
        //fuck you different scope
        console.log(this.state.weather);
        // return openWeather.toString();
        return 'tutaj bedzie obiekt z pogoda; linia 71 term';
    }


    render() {
        let text;
        switch (this.props.value) {
            case '0': {
                text = '-30%';
                break;
            }
            case '1': {
                text = '0';
                Terminal.focusHere();
                break;
            }
            default: {
                text = '-30%';
                break;
            }
        }

        return (<div id='termDiv' style={{left: text}}>
            <form onSubmit={this.handleSubmit}>
                <input id='terminal' type="text" value={this.state.value} autoCorrect={'off'} spellCheck={'false'} onChange={this.handleChange}/>
            </form>
            <textarea tabIndex={'20'} id='textarea' autoCorrect={'off'}  spellCheck={'false'} readOnly={'true'} value={this.state.textA}/>
        </div>);
    }

}

export default Terminal;
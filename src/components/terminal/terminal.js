import React from 'react';
import './terminal.css';


class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textA: '',
            value: '',
            data: [],
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
                this.setState({textA: 'List of avalaible commands:\nw - current weather\nmu - redirect to 4chan /mu/ board\nrau1 - Studies'});
                this.setState({value: ""});
                break;
            }
            case 'w':
            {
                let weather = this.getCurrentWeather();
                this.setState({textA: weather});
                this.setState({value: ""});
                break;
            }
            case 'wind':{
                this.setState({textA:'0.3-1.5 m/s - Bardzo słaby powiew\n' +
                '1.6-3.3 m/s - Odczuwa się istnienie powiewu\n' +
                '3.4-5.4 m/s - Powierzchnia wody stojącej marszczy się\n' +
                '5.5-7.9 m/s - Wiatr unosi z ziemi kurz i suche liście\n' +
                '8.0-10.7 m/s - Poruszają się gałęzie drzew; wiatr gwiżdże w uszach\n' +
                '10.8-13.8 m/s - Poruszają się grube gałęzie drzew\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlol', value: ''});
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
            case 'e':{
                document.getElementById('searchbar').focus();
                this.props.onSubmit();
                this.setState({value: "", textA: ''});
                break;
            }
            case 't':{
                document.getElementById('searchbar').focus();
                this.props.onSubmit();
                this.setState({value: "", textA: ''});
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
    componentDidMount() {
        //fucking weather I swear to god
        let apiKey = 'af6eccccbe9e42573102a3f5a16ceb48';
        let city = 'Gliwice';
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;
        fetch(url)
            .then( (response) => {
                return response.json() })
            .then( (json) => {
               // console.log(json);
                this.setState({data: json});
            });
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
    //todo do weather forcast for 5 days and maybe sth more
    getCurrentWeather() {
    let pogoda = this.state.data;
return 'Current weather:\n'+pogoda.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())+ '\nTemp: '+ pogoda.main.temp+ '°C\nClouds: '+pogoda.clouds.all+'%' +
    '\nWind: '+pogoda.wind.speed+' m/s';
    }
}

export default Terminal;
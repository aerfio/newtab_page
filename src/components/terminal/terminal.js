import React from 'react';
import './terminal.css';
import axios from 'axios';
import * as personal from '../../modules/OpenWeatherMapApi'
import Textarea from "react-textarea-autosize";


class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textA: '',
            value: '',
            dataCurrent: [],
            dataFiveDays: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static focusHere() {
        document.getElementById('terminal').focus();
    }

    handleChange(event) {
        this.setState({value: event.target.value.substring(1)});
    }

    handleSubmit(event) {
        event.preventDefault();

        switch (this.state.value) {
            case 'help': {
                this.setState({textA: 'List of avalaible commands:\nw - current weather\nwf - weather forecast for 5 days\nmu - redirect to 4chan /mu/ board\ne, exit or t - close terminal\nrau1 - Studies\nwind - help about wind speed from current weather\nsilka - what to take to gym \'coz you\'re retard and can never remember'});
                this.setState({value: ""});
                break;
            }
            case 'w': {
                let weather = this.getCurrentWeather();
                this.getFiveDaysWeather();
                this.setState({textA: weather});
                this.setState({value: ""});
                break;
            }
            case 'silka': {
                let weather = personal.gym;
                this.setState({textA: weather});
                this.setState({value: ""});
                break;
            }
            case 'wf': {
                let weather = this.getFiveDaysWeather();
                this.setState({textA: weather});
                this.setState({value: ""});
                break;
            }
            case 'wind': {
                this.setState({
                    textA: '0.3-1.5 m/s - Bardzo słaby powiew\n' +
                    '1.6-3.3 m/s - Odczuwa się istnienie powiewu\n' +
                    '3.4-5.4 m/s - Powierzchnia wody stojącej marszczy się\n' +
                    '5.5-7.9 m/s - Wiatr unosi z ziemi kurz i suche liście\n' +
                    '8.0-10.7 m/s - Poruszają się gałęzie drzew; wiatr gwiżdże w uszach\n' +
                    '10.8-13.8 m/s - Poruszają się grube gałęzie drzew', value: ''
                });
                break;
            }
            case 'mu': {
                window.location.assign('https://boards.4chan.org/mu/');
                event.preventDefault();
                this.setState({value: "", textA: ''});
                break;
            }
            case 'rau1': {
                window.location.assign('https://platforma.polsl.pl/rau1/course/index.php?categoryid=26');
                event.preventDefault();
                this.setState({value: ""});
                break;
            }
            case 'e': {
                document.getElementById('searchbar').focus();
                this.props.onSubmit();
                this.setState({value: "", textA: ''});
                break;
            }
            case 't': {
                document.getElementById('searchbar').focus();
                this.props.onSubmit();
                this.setState({value: "", textA: ''});
                break;
            }
            case 'exit': {
                document.getElementById('searchbar').focus();
                this.props.onSubmit();
                this.setState({value: "", textA: ''});
                break;
            }
            default: {
                this.setState({value: "", textA: 'No such command, try again.'});
                break;
            }
        }
    }

    componentDidMount() {
        //fucking weather I swear to god
        let url = personal.urlCur;

       axios.get(url).then(response => this.setState({dataCurrent: response.data}));

        //5 days
        url = personal.urlFive;
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({dataFiveDays: json});
            });

        //chrome fucks up cursor position within terminal without this
            const input = this.input;
            const length = input.value.length;
            input.focus();
            input.setSelectionRange(length, length);
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
                <input ref={ref => this.input = ref} id='terminal' type="terminal" value={'>'+this.state.value} autoCorrect={'off'} spellCheck={'false'}
                       onChange={this.handleChange}/>
            </form>
            <Textarea tabIndex={'20'} id='textarea' autoCorrect={'off'} spellCheck={'false'} readOnly={'true'}
                      value={this.state.textA}/>

        </div>);
    }

    getFiveDaysWeather() {
        let forecast = this.state.dataFiveDays;
        // eslint-disable-next-line
        if (forecast.length == 0) {
            return 'Can\'t connect to internet'
        }

        for(var len=0;forecast.list[len]!==undefined;len++);

        let tempTab = Array.of();

        for (let i = 0; i < len; i++) {
            if (forecast.list[i].dt_txt.slice(-8,-3)==='09:00' ||forecast.list[i].dt_txt.slice(-8,-3)==='12:00' || forecast.list[i].dt_txt.slice(-8,-3)==='15:00' ||forecast.list[i].dt_txt.slice(-8,-3)==='18:00') {
                tempTab.push(i);
            }
        }

        let toReturn='';
        for (let i=0;i<tempTab.length;i++) {//dzien miesiac godzina:minuty
            //following line makes temperatures in format: x.y°C. Without it there would be shit like 9°C and I want 9.0°C
            let temp=(Math.round(forecast.list[tempTab[i]].main.temp*10))%10===0 ? Math.round(forecast.list[tempTab[i]].main.temp*10)/10+'.0' : Math.round(forecast.list[tempTab[i]].main.temp*10)/10;
            if(temp>=0){
                //otherwise temps under 0 are not aligned nicely
                temp=' '+temp;
            }
            let tmp=new Date(forecast.list[tempTab[i]].dt_txt.slice(0, 10));
            toReturn += tmp.toLocaleDateString('en-gb', {weekday: 'short'}) + ' ' + forecast.list[tempTab[i]].dt_txt.slice(8, 10) + '.' + forecast.list[tempTab[i]].dt_txt.slice(5, 7) + ' ' + forecast.list[tempTab[i]].dt_txt.slice(-8, -3) + ': ' + temp + '°C, ' + forecast.list[tempTab[i]].wind.speed.toFixed(2) + ' m/s, ' + forecast.list[tempTab[i]].weather[0].description.replace(/\b\w/g, l => l.toUpperCase()) + '\n';
           //next line separates days so it looks more grouped
            if(i<tempTab.length-1 && forecast.list[tempTab[i]].dt_txt.slice(8, 10)!==forecast.list[tempTab[i+1]].dt_txt.slice(8, 10)){
                toReturn+='\n';
            }
        }
        return toReturn;
    }

    getCurrentWeather() {
        let pogoda = this.state.dataCurrent;
        // eslint-disable-next-line
        if (pogoda.length == 0) {
            return 'Can\'t connect to internet';
        }
        return 'Current weather:\n' + pogoda.weather[0].description.replace(/\b\w/g, l => l.toUpperCase()) + '\nTemp: ' + pogoda.main.temp + '°C\nClouds: ' + pogoda.clouds.all + '%' +
            '\nWind: ' + pogoda.wind.speed + ' m/s';
    }
}
export default Terminal;
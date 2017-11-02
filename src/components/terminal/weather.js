import React from 'react';
import request from 'request';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Weather extends React.Component {
    constructor(props){
    super(props);
    this.state={
        value: 0
        }
    }

    jsonHandler=(body)=>{
        console.log(JSON.parse(body));
    };

    render() {
        let apiKey = 'af6eccccbe9e42573102a3f5a16ceb48';
        let city = 'Gliwice';
        let url = 'http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric&appid=' + apiKey;

        request.get(url, function (err, res, body) {
            if (err) {
                console.log('error:');
            } else {
                cookies.set('myJSON', JSON.parse(body), { path: '/' });
            }
        });
        console.log(cookies.get('myJSON').list[0]);
        return (
            <div>
                {cookies.get('myJSON').list[0].main.temp}
            </div>
        );


    }
}

export default Weather;
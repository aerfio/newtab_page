import React from 'react';
import request from 'request';


class Weather extends React.Component {
    render() {
        let apiKey = 'af6eccccbe9e42573102a3f5a16ceb48';
        let city = 'Gliwice';
        let url = 'http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric&appid=' + apiKey;
        request.get(url, function (err, res, body) {
            if (err) {
                console.log('error:');
            } else {
                let weather = JSON.parse(body);
                console.log('weather:', weather);
            }
        });


        return (
            <div>
            </div>
        );


    }
}

export default Weather;
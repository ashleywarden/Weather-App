import React from 'react'
import moment from 'moment';

const SevenDayWeatherCard = ({dt, temp, main, description, icon, min_temp, max_temp}) => {

    const date = moment(dt).format('MMMM Do YYYY');
    const weekday = moment(dt).format('dddd');

    return (
            <div className="seven-day-weather-card">
                <div>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"></img>
                </div> 
                <div>
                    <p>{weekday}</p>
                    <p>{date}</p>
                    <p>{temp}&deg;C</p>
                    <p>Min: {min_temp}&deg;C Max: {max_temp}&deg;C</p>
                    <p>{main}</p>
                </div>

            </div>
    )
}

export default SevenDayWeatherCard

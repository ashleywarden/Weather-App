import React from 'react'
import moment from 'moment';
import './Hourly.css'

const HourlyWeatherCard = ({dt, temp, main, description, icon, humidity}) => {

    const hour = moment(dt).format('h:mm:ss a')

    return (
            <div className="hourly-weather-card">
                <div>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"></img>
                </div> 
                <div>
                    <p>{hour}</p>
                    <p>{temp}&deg;C</p>
                    <p>{description}</p>
                </div>

            </div>
    )
}

export default HourlyWeatherCard

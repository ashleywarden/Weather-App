import React from 'react'
import { FaWind, FaTemperatureLow, FaTint, FaSun } from 'react-icons/fa'


const CurrentWeatherCard = ({dt, feelslike, humidity, wind_speed, uvi}) => {


    return (
    <div className="weather-details-card">
                <div>
                    <h3><FaTemperatureLow /> Feels Like</h3> 
                    <div>{feelslike}&deg;C</div>
                </div>
                <div>
                    <h3><FaTint /> Humidity</h3>
                    <div>{humidity}%</div>
                </div>
                <div><h3><FaWind /> Wind Speed</h3>
                    <div>{wind_speed} MPH</div>
                </div>
                <div><h3><FaSun /> UV Index</h3> 
                    <div>{uvi}</div>
                </div>
    </div>
    )
}

export default CurrentWeatherCard

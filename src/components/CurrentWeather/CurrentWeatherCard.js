import React from 'react'


const CurrentWeatherCard = ({dt, feelslike, temp, description, icon, city}) => {

    return (
    <div className="weather-card">
      <div className="weather-card-city">
        <h3>{city}</h3>
      </div>
        <div className="weather-card-icon">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"></img>
        </div>
        <div className="weather-card-temperature">
          <h1>{temp}&deg;</h1>
        </div>
        <div className="weather-card-description">
          <p>{description}</p>
        </div>
    </div>
    )
}

export default CurrentWeatherCard

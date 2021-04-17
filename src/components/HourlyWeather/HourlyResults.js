import HourlyWeatherCard from './HourlyWeatherCard'
import './Hourly.css'

const HourlyResults = ({ weathers }) => {

  return (
    <div className="hourly-weather-container">
        {weathers.hourly && weathers.hourly.slice(0, 24).map(({dt, temp, weather}) => (
          <div className="hourly-weather-card-container"key={dt}>
            <HourlyWeatherCard 
              dt={dt * 1000}
              icon = {weather[0].icon}
              main = {weather[0].main}
              description = {weather[0].description}
              temp = {Math.round(temp)}
            />
            </div>
        ))}
      </div>

  )
}

  export default HourlyResults
  
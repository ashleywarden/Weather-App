import CurrentWeatherCard from './CurrentWeatherCard'
import CurrentWeatherDetailsCard from './CurrentWeatherDetailsCard'


const Result = ({ weathers, city }) => {


  return (

    <div className="current-weather-container">

    {/**Displaying the CURRENT weather */}
      <CurrentWeatherCard 
        timezone = {weathers.timezone}
        city = {city}
        temp = {Math.round(weathers.current && weathers.current.temp)} //Remove decimal points
        description = {weathers.current && weathers.current.weather[0].description}
        icon = {weathers.current && weathers.current.weather[0].icon}
      />

      <CurrentWeatherDetailsCard 
        feelslike = {Math.round(weathers.current && weathers.current.feels_like)}
        humidity = {weathers.current && weathers.current.humidity}
        wind_speed = {weathers.current && weathers.current.wind_speed}
        uvi = {weathers.current && weathers.current.uvi}
      />
    </div>
  )
}

  export default Result
  
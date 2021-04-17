import SevenDayWeatherCard from './SevenDayWeatherCard'

const SevenDayWeatherResults = ({ weathers }) => {

  return (


    
    <div className="seven-day-container">
        {weathers.daily && weathers.daily.map(({dt, temp, weather}) => (
          <div className="seven-day-card-container"key={dt}>
            <SevenDayWeatherCard 
              dt={dt * 1000}
              icon = {weather[0].icon}
              main = {weather[0].main}
              description = {weather[0].description}
              temp = {Math.round(temp.day)}
              min_temp = {Math.round(temp.min)}
              max_temp = {Math.round(temp.max)}
            />
            </div>
        ))}
      </div>

  )
}

  export default SevenDayWeatherResults
  
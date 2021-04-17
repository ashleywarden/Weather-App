import './App.css';
import {Container} from 'react-bootstrap'
import Search from './components/Search/Search'
import Result from './components/CurrentWeather/CurrentWeatherResult'
import Tab from './components/Tab/Tab'
import Title from './components/AppTitle/Title'
import { useState, useEffect } from 'react'
import { API_BASE_URL, API_KEY } from './apis/config.js'


const App = () => {
  //default coordinates set to Vancouver
  const [latLng, setLatLng] = useState({
    lat: "49.2827",
    lng: "-123.1207"
  })
  const [city, setCity] = useState("Vancouver, BC, Canada")
  const [weatherData, setWeatherData] = useState({})

  //Fetch the weather data
  useEffect((e) => {
    const getWeatherData = async () => {
      fetch(`${API_BASE_URL}data/2.5/onecall?lat=${latLng.lat}&lon=${latLng.lng}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((dataObj) => setWeatherData(dataObj))
    }
    if (latLng.lat){
      getWeatherData()
    }
  }, [latLng, setLatLng])



  const getDataFromSearch = result => {
    setLatLng(result)
  }

  const getCityFromSearch = value => {
    setCity(value)
  }



  return (
    <Container className="App">

      <Title />

      <Tab weathers ={weatherData}/>

      <Search className="SearchBar" updateCoords={getDataFromSearch} updateCity={getCityFromSearch}/>

      {weatherData && <Result className="Currentweather" weathers ={weatherData} city={city} />}

    </Container>
  )
}

export default App
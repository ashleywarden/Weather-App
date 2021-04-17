import { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import { FaSearch } from 'react-icons/fa'

const Search = ({ updateCoords, updateCity }) => {

    const [city, setCity] = useState('')
    const [latLng, setLatLng] = useState({
      lat: null, 
      lng: null
    })
    const handleSelect = async value => {
      const results = await geocodeByAddress(value)
      const latLng = await getLatLng(results[0])
      
      setCity(value)
      setLatLng(latLng)
      updateCoords(latLng)
      updateCity(city)
    }


    
    return (

    <div className="search-container">

    <div className="search-bar">
    <PlacesAutocomplete
      value={city} 
      onChange={setCity} 
      onSelect={handleSelect}
      >{({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div className="search-bar-container">
          <div className="search-bar-row">
            <input {...getInputProps({ placeholder: "Enter address" })}/>
            <span><FaSearch /></span>
            </div>
            <div className="./images/search-list">
            {loading ? <div>...loading</div> : null}
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "gray" : "#FFF",
                color: suggestion.active ? "#FFF" : "gray"
              }
              return <div className="search-list-results" {...getSuggestionItemProps( suggestion, { style } )}>
                {suggestion.description}
                </div>
            })}
          </div>


        </div>
      )}
      </PlacesAutocomplete>
      </div>
      </div>
    )
}

export default Search

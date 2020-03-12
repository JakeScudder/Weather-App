import React from 'react';

// import axios from 'axios';
// import accuKey from '../accuweather.js';

const Forecast = (props) => {

  let data = props.data

  let description;
  let descCapitalized;
  let currentTemp;
  let wind;
  let direction;
  let feels;
  let low;
  let high;
  let sunrise;
  let sunset;
  
  const roundTemp = () => {
    let rawTemp = data.main.temp;
    rawTemp = Math.round(rawTemp);
    currentTemp = Math.trunc(rawTemp)
  }

  const windy = () => {
    let rawWind = data.wind.speed;
    rawWind = Math.round(rawWind);
    wind = Math.trunc(rawWind)

    direction = data.wind.deg;
    if (direction >= 334 || direction <= 25) {
      direction = "N";
    }
    if (direction >= 26 || direction <= 65) {
      direction = "NE";
    }
    if (direction >= 66 || direction <= 115) {
      direction = "E";
    }
    if (direction >= 116 || direction <=  155) {
      direction = "SE";
    }
    if (direction >= 156 || direction <=  205) {
      direction = "S";
    }
    if (direction >= 206 || direction <=  245) {
      direction = "SW";
    }
    if (direction >= 246 || direction <=  295) {
      direction = "W";
    }
    if (direction >= 296 || direction <=  335) {
      direction = "NW";
    }
  }

  const feelsLike = () => {
    let rawTemp = data.main.feels_like;
    rawTemp = Math.round(rawTemp);
    feels = Math.trunc(rawTemp)
  }

  const lowTemp = () => {
    let rawTemp = data.main.temp_min;
    rawTemp = Math.round(rawTemp);
    low = Math.trunc(rawTemp)
  }

  const highTemp = () => {
    let rawTemp = data.main.temp_max;
    rawTemp = Math.round(rawTemp);
    high = Math.trunc(rawTemp)
  }

  const getSun = () => {
    sunrise = data.sys.sunrise
    sunrise = new Date(sunrise * 1000).toLocaleTimeString();
    sunset = data.sys.sunset
    sunset = new Date(sunset * 1000).toLocaleTimeString();
  }

  // //Fetch actual Tide Data with Location Key
  // const fetchTides = (locationKey) => {
  //   axios.get(`https://cors-anywhere.herokuapp.com/http://apidev.accuweather.com/tidal/v1/forecasts/1day/${locationKey}?apikey=${accuKey}`)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log('Error fetching the weather data:', error)
  //   })
    
  // }

  // //Tide Api Fetch Location Key
  // const handleTideLocation = (location) => {
  //   axios.get(`https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search.json?apikey=${accuKey}&q=${location}&details=true HTTP/1.1`)
  //     .then(response => {
  //       console.log(response.data[0].Key);
  //       let key = response.data[0].Key;
  //       fetchTides(key)
  //     })
  //     .catch(error => {
  //       console.log('Error fetching the weather data:', error)
  //     })
  // }



  if (data.weather && data.weather[0]) {
    description = data.weather[0].description;
    descCapitalized = description.charAt(0).toUpperCase() + description.slice(1);
    roundTemp();
    feelsLike();
    lowTemp();
    highTemp();
    windy();
    getSun();
    // handleTideLocation(data.name)
  }

  

  return (
    <div id="forecast-container">
      <div id="conditions">
        <h6 id="conditions-header">{`Current Conditions in ${data.name}:`}</h6>
        <h6 id="conditions-desc">{descCapitalized}</h6>
      </div>
      <div id="forecast-div">
        <div id="forecast-flex">
          <div>{`Currently: ${currentTemp}°`}</div>
          <div>{`Feels Like: ${feels}°`}</div>
          <div>{`Wind: ${direction} ${wind}mph`}</div>
          <div>{`Low Today: ${low}°`}</div>
          <div>{`High Today: ${high}°`}</div>
          <div className="tide">
            <p >{`Sunrise: ${sunrise}`}</p>
            <p>{`Sunset: ${sunset}`}</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forecast;
import React from 'react';

const Forecast = (props) => {
  let data = props.data
  console.log(data);

  let description;
  let descCapitalized;
  let currentTemp;
  let wind;
  let direction;
  let feels;
  let low;
  let high;
  
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

  if (data.weather && data.weather[0]) {
    description = data.weather[0].description;
    descCapitalized = description.charAt(0).toUpperCase() + description.slice(1);
    roundTemp();
    feelsLike();
    lowTemp();
    highTemp();
    windy();
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
          <div>{`Low Today: ${low}°`}</div>
          <div>{`High Today: ${high}°`}</div>
          <div>{`Wind: ${direction} ${wind}mph`}</div>
          <div className="tide">
            <p>{`High Tide: N/A`}</p>
            <p >{`Low Tide: N/A`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forecast;
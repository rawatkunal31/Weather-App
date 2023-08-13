const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "074bf67a52mshf600157160c5970p112937jsn2f6a832dcb7e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;

      console.log(response);
    })
    .catch((err) => console.log(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    shan_temp.innerHTML = response.temp;
    shan_feels_like.innerHTML = response.feels_like;
    shan_humidity.innerHTML = response.humidity;
    shan_min_temp.innerHTML = response.min_temp;
    shan_max_temp.innerHTML = response.max_temp;
    shan_wind_speed.innerHTML = response.wind_speed;
    shan_wind_degrees.innerHTML = response.wind_degrees;
    shan_sunrise.innerHTML = response.sunrise;
    shan_sunset.innerHTML = response.sunset;

    console.log(response);
  })
  .catch((err) => console.log(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
  options
)
  .then((response) => response.json())
  .then((response) => {
    boston_temp.innerHTML = response.temp;
    boston_feels_like.innerHTML = response.feels_like;
    boston_humidity.innerHTML = response.humidity;
    boston_min_temp.innerHTML = response.min_temp;
    boston_max_temp.innerHTML = response.max_temp;
    boston_wind_speed.innerHTML = response.wind_speed;
    boston_wind_degrees.innerHTML = response.wind_degrees;
    boston_sunrise.innerHTML = response.sunrise;
    boston_sunset.innerHTML = response.sunset;

    console.log(response);
  })
  .catch((err) => console.log(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
  options
)
  .then((response) => response.json())
  .then((response) => {
    lucknow_temp.innerHTML = response.temp;
    lucknow_feels_like.innerHTML = response.feels_like;
    lucknow_humidity.innerHTML = response.humidity;
    lucknow_min_temp.innerHTML = response.min_temp;
    lucknow_max_temp.innerHTML = response.max_temp;
    lucknow_wind_speed.innerHTML = response.wind_speed;
    lucknow_wind_degrees.innerHTML = response.wind_degrees;
    lucknow_sunrise.innerHTML = response.sunrise;
    lucknow_sunset.innerHTML = response.sunset;

    console.log(response);
  })
  .catch((err) => console.log(err));

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      kolkata_temp.innerHTML = response.temp;
      kolkata_feels_like.innerHTML = response.feels_like;
      kolkata_humidity.innerHTML = response.humidity;
      kolkata_min_temp.innerHTML = response.min_temp;
      kolkata_max_temp.innerHTML = response.max_temp;
      kolkata_wind_speed.innerHTML = response.wind_speed;
      kolkata_wind_degrees.innerHTML = response.wind_degrees;
      kolkata_sunrise.innerHTML = response.sunrise;
      kolkata_sunset.innerHTML = response.sunset;
  
      console.log(response);
    })
    .catch((err) => console.log(err));
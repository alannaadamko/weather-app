function displayTemperature(response) {
console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let windElement = document.querySelector("#wind");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
wind.innerHTML = Math.round(response.data.wind.speed);
}

let apikey = "7ee989a6f658c80e7aaad9c314186ba8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Saskatoon&appid=${apiKey}&units=metric`;

axios.get(url).then(displayTemperature);

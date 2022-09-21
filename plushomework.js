let now = new Date();
let hours =now.getHours();
let minutes = now.getMinutes();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let day = days[now.getDay()];
let currentDate = document.querySelector('#current');
currentDate.innerHTML = `${day} ${hours}:${minutes}`;


function showWeather(response) {
    document.querySelector('#city').innerHTML = response.data.name;
    document.querySelector('#temperature').innerHTML = Math.round(response.data.main.temp);
let description = document.querySelector("#temp-description");
    
    description.innerHTML = response.data.weather[0].description;

    document.querySelector('#humidity').innerHTML = response.data.main.humidity;

    document.querySelector('#wind').innerHTML = Math.round(response.data.wind.speed);
}

function search(city) {
    let apiKey = "8b7c83c1d2550cda541e73c93abe2c90";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showWeather);
}
function searchSubmit(event) {
    event.preventDefault();
    let city = document.querySelector('#city-input').value;
    search(city)

}
let form = document.querySelector('#search-form');
form.addEventListener('submit', searchSubmit);

search('Lagos');

function showLocation(position) {
    let apiKey = "8b7c83c1d2550cda541e73c93abe2c90";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
    event.preventDefault();
navigator.geolocation.getCurrentPosition(showLocation)
}

let button = document.querySelector('button');
button.addEventListener('click', getCurrentLocation);

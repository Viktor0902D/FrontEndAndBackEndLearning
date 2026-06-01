const cityName = document.getElementById("city-name");
const temperature =document.getElementById("temperature-display");
const windSpeed = document.getElementById("wind-display");

export function renderWeather(weatherData){
    cityName.textContent = `${weatherData.cityName}`;
    temperature.textContent = `${weatherData.temperature} °C`;
    windSpeed.textContent = `${weatherData.windspeed} km/h`;
}

export function renderError(errorMessage){
    cityName.textContent = "Error";
    temperature.textContent = "";
    windSpeed.textContent = "";
    console.error("Error loading data:", errorMessage);
}
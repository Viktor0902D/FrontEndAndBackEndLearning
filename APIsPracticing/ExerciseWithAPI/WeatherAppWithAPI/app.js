import { getWeather,getCoordinates } from "./api.js";
import { renderWeather, renderError } from "./ui.js";

const inputCity=document.getElementById("city-input");
const searchBtn=document.getElementById("search-btn");

async function handleSearch(){
    const inputValue=inputCity.value.trim();
    if(inputValue){
        try{
            const {latitude, longitude, name}=await getCoordinates(inputValue);
            if(latitude && longitude){
                const weatherData=await getWeather(latitude, longitude);
                const objectToRender={
                    cityName:name,
                    temperature: weatherData.temperature,
                    windspeed: weatherData.windspeed
                }
                renderWeather(objectToRender);
            }
        }
        catch(error){
            renderError("Failed to load weather data for the specified city.");
        }
    }
    else{
         renderError("Please enter a city name.");
    }
}
async function init(){
    try {
        const weatherData=await getWeather(43.21, 27.91);
        if(weatherData){
            renderWeather({
                cityName:"Varna",
                temperature: weatherData.temperature,
                windspeed: weatherData.windspeed
            });
        } else {
            renderError("No weather data available.");
        }
    } catch (error) {
        renderError("Failed to load weather data.");
    }
}
init();
searchBtn.addEventListener("click", handleSearch);
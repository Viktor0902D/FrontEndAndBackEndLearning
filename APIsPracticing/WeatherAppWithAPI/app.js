import { getWeather } from "./api.js";
import { renderWeather, renderError } from "./ui.js";


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
import createWeatherCache from './cache.js';
import WeatherCard from './WeatherCard.js';

const getWeather=createWeatherCache();

async function handleSearch(cityName){
    try {
        const weatherData = await getWeather(cityName);
        const card=new WeatherCard(weatherData);
        console.log(card.render());

    } catch (error) {
        console.error(`❌ [Error] ${error.message}`);
    }
}

await handleSearch("London"); // Should say [Network] Fetching...
await handleSearch("Paris");  // Should say [Network] Fetching...
await handleSearch("London"); // Should say [Cache] Returning instantly...
await handleSearch("Gotham"); // Should throw the 404 error
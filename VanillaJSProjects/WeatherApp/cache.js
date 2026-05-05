import { fetchWeather } from "./api.js";
export default function createWeatherCache(){
    const cache={};
    return async (city)=>{
        const normalizedCity = city.toLowerCase();
        if(cache[normalizedCity]){
            console.log(`📂 [Cache] Returning cached data for ${city}...`);
            return cache[normalizedCity];
        }
        console.log(`🌍 [Network] Fetching fresh data for ${city}...`);
        const data=await fetchWeather(normalizedCity);
        cache[normalizedCity]=data;
        return data;
    }
}
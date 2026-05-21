export async function getWeather(lattitude, longitude) {
    try {
        const response= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lattitude}&longitude=${longitude}&current_weather=true`);

    if(!response.ok){
        throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
    }

    const weatherData=await response.json();
    return weatherData.current_weather;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        return null; // Return null or you could throw the error again depending on your needs
    }
}

// Varna coordinates
getWeather(43.21, 27.91).then(console.log);
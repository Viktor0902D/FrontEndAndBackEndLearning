export default class WeatherCard{
    constructor(weatherData){
        this.city = weatherData.city;
        this.temp = weatherData.temp;
        this.condition = weatherData.condition;
        this.humidity = weatherData.humidity;
    }
    render(){
        return `<div class="weather-card">
        <h2>City: ${this.city}</h2>
        <p>Temperature: ${this.temp}°C</p>
        <p>Condition: ${this.condition}</p>
        <p>Humidity: ${this.humidity}%</p>
        </div>`
    }
}
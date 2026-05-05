// api.js
export const fetchWeather = (city) => {
  return new Promise((resolve, reject) => {
    console.log(`📡 [Network] Fetching data for ${city}...`);
    
    setTimeout(() => {
      const database = {
        london: { temp: 15, condition: "Rainy", humidity: 80 },
        paris: { temp: 18, condition: "Cloudy", humidity: 65 },
        tokyo: { temp: 22, condition: "Sunny", humidity: 50 },
        varna: { temp: 25, condition: "Clear", humidity: 60 },
        sofia: { temp: 20, condition: "Partly Cloudy", humidity: 55 }
      };

      const data = database[city.toLowerCase()];
      
      if (data) {
        // Resolves successfully with the data object
        resolve({ city: city.toUpperCase(), ...data });
      } else {
        // Rejects if the city isn't in our fake database
        reject(new Error(`404: City '${city}' not found.`));
      }
    }, 4000); // 1 second simulated delay
  });
};
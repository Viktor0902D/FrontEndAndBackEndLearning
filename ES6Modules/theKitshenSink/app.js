import DatabaseConnection from "./api";
import { fetchData, API_KEY } from "./api";

const db = new DatabaseConnection("my-database-connection-string");
console.log(API_KEY); // 12345ABC
fetchData(); // Fetching data from the database...

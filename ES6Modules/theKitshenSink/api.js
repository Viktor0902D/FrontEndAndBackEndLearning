class DatabaseConnection{
    constructor(connectionString){
        this.connectionString=connectionString;
    }
}
const API_KEY="12345ABC";
function fetchData(){
    console.log("Fetching data from the database...");
}
export { fetchData };
export { API_KEY };
export default DatabaseConnection;
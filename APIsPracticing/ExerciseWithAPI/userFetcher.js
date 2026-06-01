// 🎟️ Ticket #1: The User Profile Fetcher (Focus: GET & Error Handling)
// The Scenario: We have a dashboard that needs to display a user's profile. We need a robust 
// asynchronous function that fetches this data and handles errors gracefully if the user doesn't exist.

async function getUserProfile(username){
    try{
        const response=await fetch(`https://api.ourstartup.com/v1/users/${username}`);

        if(!response.ok){
            throw new Error(`User ${username} not found. Status: ${response.status}`);
        }

        const userData=await response.json();
        console.log("User Profile Data:", userData);
        return userData;
    }
    catch(error){
        console.error("Error fetching user profile:", error.message);
        return null; // Return null or you could throw the error again depending on your needs
    }
}
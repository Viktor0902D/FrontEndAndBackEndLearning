// 🎟️ Ticket #2: The Registration Portal (Focus: POST & Headers)
// The Scenario: Our marketing team just launched a huge ad campaign. We need a function to take the
//  data from our "Sign Up" form and send it to the database to create a new user account.

async function registerUser(newUserObject){
    try {
        const response=await fetch(`https://api.ourstartup.com/v1/users`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUserObject)
        });

        if(!response.ok){
            throw new Error(`Failed to register user. Status: ${response.status}`);
        }

        const responseData=await response.json();
        console.log("Registration successful:", responseData);
        return responseData;
        
    } catch (error) {
        console.error("Error registering user:", error.message);
        return null; // Return null or you could throw the error again depending on your needs
    }
}
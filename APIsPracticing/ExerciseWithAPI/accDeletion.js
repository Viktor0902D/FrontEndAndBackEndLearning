// 🎟️ Ticket #3: The Account Deletion (Focus: DELETE & Authorization)
// The Scenario: A user has decided to leave our platform and clicked "Delete Account". Because this is a 
// destructive, highly sensitive action, the backend requires strict proof that the person making the request is actually the user (and not a hacker).

async function deleteUserAccount(userId,secretToken){
    try {
        const response=await fetch(`https://api.ourstartup.com/v1/users/${userId}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${secretToken}`
            }
        });

        if(response.status===401){
            throw new Error("Unauthorized: Invalid or missing token.");
        }
        if(!response.ok){
            throw new Error(`Failed to delete account. Status: ${response.status}`);
        }

        console.log("Account deletion successful.");
        return true; // Indicate success
    } catch (error) {
        console.error("Error deleting account:", error.message);
        return false; // Indicate failure
    }
}
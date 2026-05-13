// 🎟️ Ticket #4: The Settings Toggle (Focus: PATCH)
// Context: A user just toggled their app theme to "Dark Mode" and turned off email notifications.
//  We need to update only those specific fields in their profile without touching their password or username.

async function updateUserSettings(userId,newSettings,secretToken){
    try {
        const response=await fetch(`https://api.ourstartup.com/v1/users/{userId}/settings`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${secretToken}`
            },
             body:JSON.stringify(newSettings)
        });

        if(response.status===401){
            throw new Error("Unauthorized: Invalid or missing token.");
        }
        if(!response.ok){
            throw new Error(`Failed to update settings. Status: ${response.status}`);
        }
        const updatedSettings=await response.json();
        console.log("Settings updated successfully:", updatedSettings);
        return updatedSettings;
    } 
    
    catch (error) {
        console.error("Error updating settings:", error.message);
        return null; // Return null or you could throw the error again depending on your needs
    }
}
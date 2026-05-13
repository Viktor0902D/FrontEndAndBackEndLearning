// 🎟️ Ticket #6: The Dashboard Aggregator (Focus: Concurrent GETs)
// Context: The admin dashboard needs to load the profiles of three newly registered users simultaneously to display them in a widget.

async function fetchMultipleUsers(usernamesArray){
    try {
        const userFetchPromises=usernamesArray.map(username=>fetch(`https://api.ourstartup.com/v1/users/${username}`));
        const responses=await Promise.all(userFetchPromises);

        const userDataPromises=responses.map(response=>{
            if(!response.ok){
                throw new Error(`Failed to fetch user ${response.url}. Status: ${response.status}`);
            }
            return response.json();
        });
        const userData=await Promise.all(userDataPromises);
        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error.message);
        return null;
    }
}
import { getServers, pingServer } from "./api.js";
import { updateServerCard, renderInitialGrid } from "./ui.js";

async function pollServers(serverList) {
  const pingPromises = serverList.map((server) => pingServer(server));
  try {
    const results = await Promise.allSettled(pingPromises);
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        updateServerCard(
          result.value.id,
          result.value.status,
          result.value.timestamp,
        );
      } else if (result.status === "rejected") {
        // 💡 Pro-tip: Unpacking the fake network error
        const failedData = JSON.parse(result.reason.message);
        updateServerCard(
          failedData.id,
          failedData.status,
          new Date(failedData.timestamp),
        );
      }
    });
  } catch (error) {
    console.error("Error polling servers:", error);
  }
}

async function init(){
    const servers=getServers();
    renderInitialGrid(servers);
    pollServers(servers);
    setInterval(()=>pollServers(servers), 5000);
}

init();
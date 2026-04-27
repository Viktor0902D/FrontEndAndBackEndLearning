//Exercise: The Notification System (Batch Processing)
function sendSms(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve(`SMS delivered to user ${userId}`);
      } else {
        reject(`Invalid phone number for user ${userId}`);
      }
    }, 1000); // Takes 1 second to send
  });
}

const usersToMessage = [101, -5, 102, -99, 103];

async function processSmsBatch(usersArray) {
  const smsPromise = usersArray.map((userId) => sendSms(userId));
  const reportCard = await Promise.allSettled(smsPromise);
  const successfulMessages = reportCard.filter(report => report.status === "fulfilled");
  const rejectedMessages = reportCard.filter(report => report.status === "rejected");

  console.log(`Batch processing complete.\n${successfulMessages.length} messages sent successfully. \n${rejectedMessages.length} messages failed.`);
  if(successfulMessages.length > 0){
    console.log("Successfully sent SMS to the following users:");
    successfulMessages.forEach((report) => {
        if (report.status === "fulfilled") {
            console.log(report.value);
        }
    });
  }
  
  if (rejectedMessages.length > 0) {
    console.log("Failed to send SMS to the following users:");
    rejectedMessages.forEach((report) => console.log(report.reason));
  }
}

// processSmsBatch(usersToMessage);


//🟢 Easy: The Image Gallery Loader

function loadImage(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fileName.includes("broken")) {
        reject(`404: ${fileName} not found`);
      } else {
        resolve(`Successfully loaded ${fileName}`);
      }
    }, 1000);
  });
}

async function renderGallery(imageArray) {
    const loadImagePromises = imageArray.map(image => loadImage(image));
    const results=await Promise.allSettled(loadImagePromises);
    results.forEach(result=>{
        if(result.status === "fulfilled"){
            console.log(result.value+"- Displaying on page.");
        } else {
            console.log(result.reason+"- Showing gray placeholder.");
        }
    });
}

const imagesToLoad = ["hero-banner.jpg", "broken-icon.png", "avatar.jpg"];
 //renderGallery(imagesToLoad);

 //🟡 Intermediate: The Microservice Health Checker

 function pingService(serviceName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating that the Database is currently down
      if (serviceName === "Database") {
        reject(`${serviceName} is OFFLINE`);
      } else {
        resolve(`${serviceName} is ONLINE`);
      }
    }, 1000);
  });
}

async function runHealthCheck(services) {
    const pingPromises=services.map(service=>pingService(service));
    const results=await Promise.allSettled(pingPromises);
    const successfulPings=results.filter(result=>result.status==="fulfilled");
    const failedPings=results.filter(result=>result.status==="rejected");
    console.log(`Health Check Complete: ${successfulPings.length} services ONLINE, ${failedPings.length} services OFFLINE.`);
    console.log("CRITICAL ALERT: The following systems need attention:");
    failedPings.forEach(ping => console.log(ping.reason));
}

const architecture = ["AuthServer", "Database", "PaymentGateway", "EmailService"];

// runHealthCheck(architecture);

//🔴 Hard: The Resilient Checkout (Sequential + Parallel)

// Step 1: Sequential (Must happen first)
function verifyUserSession(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "valid-token") resolve("User Verified");
      else reject("Auth Error: Invalid token. Kicking to login page.");
    }, 500);
  });
}

// Step 2a: Parallel (Payment)
function processCreditCard() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Bank Error: Card declined."), 1000); // This one fails!
  });
}

// Step 2b: Parallel (Inventory)
function reserveInventory() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Stock reserved in warehouse."), 1000); // This one succeeds!
  });
}

async function executeCheckout(token){
    try {
        const tokenData=await verifyToken(token);
        const results=await Promise.allSettled([processCreditCard(), reserveInventory()]);
        if(results[0].status === "rejected" && results[1].status === "fulfilled"){
            console.log(`⚠️ CRITICAL: Payment failed, but stock was reserved! Triggering rollback to return items to shelves.`);
        }
        
    } catch (error) {
        console.log("Authentication failed: " + error);
    }
}

executeCheckout("valid-token");

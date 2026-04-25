//Exercise 1: The Modern E-Commerce Checkout

// Function 1 (The Kitchen)
function checkInventory(itemName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemName === "Laptop") {
        resolve(1200); // Resolves with the raw price
      } else {
        reject("Error: Item is out of stock.");
      }
    }, 1000);
  });
}

// Function 2 (The Kitchen)
function chargeCreditCard(price) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (price <= 1500) {
        resolve(`Payment successful of $${price}.`);
      } else {
        reject("Error: Payment failed: Insufficient funds.");
      }
    }, 1000);
  });
}

async function processOrder(item) {
  try {
    const price = await checkInventory(item);
    console.log(`Price of ${item} is $${price}.`);
    const paymentResult = await chargeCreditCard(price);
    console.log(paymentResult + "Order confirmed!");
  } catch (error) {
    console.log("Transaction aborted: " + error);
  }
}
// processOrder("Laptop");
// processOrder("Smartphone");

//Exercise 2: The Secure Login Flow

function verifyToken(tokenString) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tokenString === "super-secret-token") {
        resolve({ userId: 77 });
      } else {
        reject("Error: Invalid token.");
      }
    }, 1000);
  });
}

function fetchProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 77) {
        resolve({ name: "Trinity", rank: "Captain" });
      } else {
        reject("Error: User not found.");
      }
    }, 1000);
  });
}

async function loadApp(token){
  try {
    const tokenData=await verifyToken(token);
    console.log("Token verified for user ID: " + tokenData.userId);
    const profileData=await fetchProfile(tokenData.userId);
    console.log("Welcome " + profileData.name + "! Your rank is " + profileData.rank + ".");  
  } catch (error) {
    console.log("Login failed: " + error);
  }
}

// loadApp("super-secret-token");
// loadApp("invalid-token");

//Exercise 3: The ATM Withdrawal (3-Step Chain)
function checkBalance(accountId){
  return new Promise((resolve,reject)=>{
    if(accountId==="acc_123"){
      resolve(500);
      console.log("Account balance checked.");
      // Resolves with the account balance
    }
    else{
      reject("Error: Account not found.");
    }
  })
}

function processWithdrawal(balance, requestAmount){
  return new Promise((resolve,reject)=>{
    if(requestAmount<=balance){
      resolve(balance-requestAmount); // Resolves with the new balance after withdrawal
      console.log(`Withdrawal of $${requestAmount} successful. Remaining balance: $${balance - requestAmount}.`);
    }
    else{
      reject("Error: Insufficient funds.");
    }
  })
}

function printReceipt(statusMessage){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Receipt printed." + statusMessage);
    },1000);
})};

async function useATM(accountId, withdrawalAmount){
  try {
    const balance=await checkBalance(accountId);
    const newBalance=await processWithdrawal(balance, withdrawalAmount);
    const receiptMessage=await printReceipt(`New balance: $${newBalance}.`);
    console.log(receiptMessage);
  } catch (error) {
    console.log("ATM transaction failed: " + error);
  }
}

// useATM("acc_123", 200);
// useATM("acc_123", 600);
// useATM("acc_999", 100);

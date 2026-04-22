//Exercise 1: The Coin Toss (Creating a Promise)
function flipCoin() {
  // YOUR TASK: Return a new Promise here
  return new Promise((resolve, reject) => {
    console.log("Flipping the coin...");

    setTimeout(() => {
      const isHeads = Math.random() > 0.5; // True 50% of the time, False 50%

      if (isHeads) {
        resolve("Heads! You win.");
      } else {
        reject("Tails! You lose.");
      }
    }, 1000);
  });
}

//Exercise 2: The Flight Booking (Consuming a Promise)

// checkFlightAvailability("Tokyo")
// .then((confirmationMessage) => {console.log(`Flight confirmed: ${confirmationMessage}`);})
// .catch((errorMessage) => {console.log(`Flight not available: ${errorMessage}`);})
// .finally(()=>console.log("Thank you for using our service!"));

//Exercise 3: The Login Simulator (Create & Consume)
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        const userData = { id: 1, role: "Admin" };
        resolve(userData);
      } else {
        reject("Invalid username or password.");
      }
    }, 1000);
  });
}

loginUser("admin", "1234")
  .then((userData) => {
    console.log(`Welcome back, ${userData.role}!`);
  })
  .catch((errorMessage) => {
    console.log(`Login failed: ${errorMessage}`);
  });

loginUser("dghh", "password")
  .then((userData) => {
    console.log(`Welcome back, ${userData.role}!`);
  })
  .catch((errorMessage) => {
    console.log(`Login failed: ${errorMessage}`);
  });

//Exercise 4: The E-Commerce Chain (Solving Callback Hell)

function checkInventory(itemName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemName === "Laptop") {
        resolve(1200);
      } else {
        reject("Item is out of stock.");
      }
    }, 1000);
  });
}

function chargeCreditCard(price) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (price <= 1500) {
        resolve(`Payment successful of ${price}$.`);
      } else {
        reject("Payment failed: Insufficient funds.");
      }
    }, 1000);
  });
}

checkInventory("Laptop")
  .then((price) => {
    console.log(price);
    return chargeCreditCard(price);
  })
  .then((paymentMessage) => {
    console.log(paymentMessage);
    console.log("Order confirmed! Your laptop will be shipped soon.");
  })
  .catch((errorMessage) => {
    console.log(`Order failed: ${errorMessage}`);
  });

  //Exercise 5: The Database Relational Chain

  function fetchUser(username){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(username==="neo"){
          resolve({userId:99, status:"active"});
        }
        else{
          reject("Error: User not found in database.");
        }
      }, 3000);
    }); 
  }

  function getUserEmails(userId){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       if(userId===99){
        resolve(["Welcome to the Matrix", "Red pill shipping confirmation"]);
       }
       else{
        reject("Error: No emails found for this ID.");
       }
      }, 2000);
    });
  }

  fetchUser("neo")
  .then((userObject)=>{
    console.log("User found:", userObject);
    return getUserEmails(userObject.userId);
  })
  .then((emails)=>{
    console.log("Inbox:", emails);
  })
  .catch((errorMessage)=>{
    console.log(errorMessage);
  });

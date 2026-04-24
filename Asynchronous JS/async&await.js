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

async function processOrder(item){
    try {
       const price= await checkInventory(item);
       console.log(`Price of ${item} is $${price}.`);
       const paymentResult=await chargeCreditCard(price);
         console.log(paymentResult+"Order confirmed!");
    } catch (error) {
        console.log("Transaction aborted: " + error);
    }
}
processOrder("Laptop");
processOrder("Smartphone");

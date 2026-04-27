//Exercise 1: Callbacks
function calculate(num1, num2, mathCallback) {
  console.log(`Calculating with ${num1} and ${num2}...`);
  const result = mathCallback(num1, num2);
  console.log(`The result is ${result}`);
}

calculate(10,5,(a,b)=>{
    return a + b;
});

//Exercise 2: Callbacks with setTimeout

function getUserProfile(userId, callback) {
  console.log(`Searching database for user ${userId}...`);
  
  setTimeout(() => {
    const fakeProfile = { id: userId, name: "Alice", role: "Admin" };
    // The database is done, call the callback!
    callback(fakeProfile); 
  }, 2000);
}
getUserProfile(99,(profile)=>{
  console.log(`Welcome back, ${profile.role} ${profile.name}!`);
});

//Exercise 3: Pizza Delivery Simulation

function orderPizza(pizzaType,onDelivery){
  console.log("Order placed for a ${pizzaType} pizza. Baking...");

  setTimeout(()=>{
    const message = `Hot ${pizzaType} pizza is at your door!`;
    onDelivery(message);
  },3000);
}
orderPizza("Pepperoni",(deliveryMessage)=>{
  console.log(deliveryMessage);
  console.log("Time to eat!");
});

//Exercise 4: Bank API Simulation

function withdrawMoney(amount, callback) {
  console.log(`Attempting to withdraw $${amount}...`);
  
  setTimeout(() => {
    if (amount > 1000) {
      // It fails: we pass an error string first, and null for the data
      callback("Error: Insufficient funds or daily limit reached.", null);
    } else {
      // It succeeds: we pass null for the error, and the success message for the data
      callback(null, `Success! Dispensing $${amount}.`);
    }
  }, 1500);
}

withdrawMoney(500,(error,message)=>{
  if(error){
    console.log("Transaction failed: " + error);
  }
  else{
    console.log(`${message} Have a nice day!`);
  }
});

//Exercise 5: Build Your Own filter()

function myFilter(array, callback) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
   if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

//Exercise 6: The Multi-Step Process (Welcome to Callback Hell)

function downloadVideo(videoName, callback) {
  console.log(`Downloading ${videoName}...`);
  setTimeout(() => callback(`[Downloaded ${videoName}]`), 1000);
}

function compressVideo(videoFile, callback) {
  console.log(`Compressing ${videoFile}...`);
  setTimeout(() => callback(`[Compressed ${videoFile}]`), 1000);
}

function uploadVideo(compressedFile, callback) {
  console.log(`Uploading ${compressedFile}...`);
  setTimeout(() => callback(`https://videosite.com/${compressedFile}`), 1000);
}

downloadVideo("skate_trick.mp4",(downloadedFile)=>{
  compressVideo(downloadedFile,(compressedFile)=>{
    uploadVideo(compressedFile,(videoURL)=>{
      console.log(`Video is live at: ${videoURL}`);
    });
});
});

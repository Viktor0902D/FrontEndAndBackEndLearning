//Exercise 1: The Bank Account (Beginner)
// The Setup:
// I want you to write a function called createBankAccount(initialBalance).
// When you execute it, it should return an inner function that lets you deposit money and prints the new balance.

function createBankAccount(initialBalance){
    let balance = initialBalance;
    return (deposit)=>{
        balance+=deposit;
        console.log(`New balance: $${balance}`);
    }
}
// const myAccount = createBankAccount(100);
// myAccount(50); // New balance: $150
// myAccount(20); // New balance: $170
// createBankAccount(200)(100); // New balance: $300

// Exercise: Build the once() Function
// The Setup:
// Here is the skeleton. Notice that we are using the Rest ... operator you mastered previously to 
// make sure we can pass any arguments (like the price) down into the original function!

function once(callbackFunction) {
  // 1. Create a private variable here to track if it has run
  let hasRun=false;
  return function(...args) {
    if(!hasRun){
        hasRun=true;
        return callbackFunction(...args);
    }
  }
}

// --- The Execution ---
function chargeCreditCard(amount) {
  console.log(`Charging $${amount}...`);
}

// We pass the function in, and save the returned closure
const safeCharge = once(chargeCreditCard);

// safeCharge(40); // Should print: "Charging $40..."
// safeCharge(100); // Should do absolutely nothing!
// safeCharge(50); // Should do absolutely nothing!

// 📝 Exercise: Build the memoize Function(Memoization)
// The Setup:
// Here is the skeleton. We are going to use a standard JavaScript object {} as our cache. 
// (Remember that you can use bracket notation cache[key] to read and write to an object dynamically!).

function memoize(callbackFunction) {
  // 1. Create your private cache object here
  let cache = {};


  return function(arg) {
    // 2. Check if the 'arg' already exists as a key in the cache.
    if(arg in cache){
      // 3. If it DOES exist, console.log("Fetching from cache...") and return the saved value.
        console.log("Fetching from cache...");
        return cache[arg];
    }
    else{
      // 4. If it DOES NOT exist, run callbackFunction(arg) and store the result in a variable.
    // 5. Save that result into your cache object so you remember it for next time.
    // 6. Return the result.
      const result=callbackFunction(arg);
      cache[arg]=result;
      return result;
    }
  }
}

// --- The Execution ---
function slowSquare(num) {
  console.log(`Calculating square for ${num}...`);
  return num * num;
}

const fastSquare = memoize(slowSquare);

// console.log(fastSquare(10000000000000000000000000000000000000000000000000000000000000000000000000000000)); // Should print "Calculating..." then "100"
// console.log(fastSquare(10000000)); // Should print "Fetching from cache..." then "100" instantly!
// console.log(fastSquare(5));  // Should print "Calculating..." then "25"
// console.log(fastSquare(1000000000)); // Should print "Fetching from cache..." then "100" instantly!

// 🟢 Easy: The Private Diary
// The Concept: You want to keep a list of diary entries, but you don't want anyone to be able to accidentally
//  overwrite or delete your array from the outside. You need a closure to hold the array privately.

function createDiary(){
    let entries=[];
    return (newEntry)=>{
        entries.push(newEntry);
        console.log(`New entry added: "${newEntry}". Total entries: ${entries.length}`);
    }
}

const myDiary = createDiary();

myDiary("Learned about closures today."); 
// Should print: ["Learned about closures today."]

myDiary("Ate a really good sandwich.");

// console.log(myDiary.entries);// Should print: undefined (because entries is private and not accessible from outside)


// 🟡 Intermediate: The Security Vault (State + Limits)
// The Concept: You are building a digital safe. The safe holds a secret password. The user gets exactly 3 attempts to guess the password. 
// If they fail 3 times, the closure permanently locks them out, even if they guess the right password later!

function createVault(correctPassword){
  let attempts=0;
  let isLocked=false;
  return function AttemptAccess(guess){
    if(isLocked){
      console.log("Vault is locked. No more attempts allowed.");
    }
    else if(guess===correctPassword){
      console.log("Access granted. Welcome to the vault!");
    }
    else{
      attempts++;
      console.log(`Wrong password! Attempts left: ${3-attempts}`);
      if(attempts>=3){
        isLocked=true;
        console.log("Too many failed attempts. Vault is locked.");
      }
    }
  }
}

// --- The Execution ---
const myVault = createVault("open-sesame");

// console.log(myVault("password123")); // Wrong password! Attempts left: 2
// console.log(myVault("admin"));       // Wrong password! Attempts left: 1
// console.log(myVault("1234"));        // Wrong password! Attempts left: 0
// console.log(myVault("open-sesame")); // Vault is locked. No more attempts allowed.

// 🔴 Hard: The Debouncer (Closures + Async)
// The Concept: This is one of the most famous Senior Frontend interview questions. Imagine a user typing into a Search Bar. If they type "M-A-C-B-O-O-K", 
// you don't want to make 7 separate API calls to the database. You want to wait until they stop typing for 1 second, and then make exactly 1 call.

// A fake API call that we don't want to spam
function searchDatabase(query) {
  console.log(`Making API call to search for: ${query}`);
}

function debounce(callback, delayInMilliseconds) {
  // 1. Create a private variable called 'timerId' (don't set it to anything yet)
  let timerId;
  return function(...args) {
    // 2. Use clearTimeout(timerId) to cancel the previous timer.
    //    (If it's the first time running, this does nothing, which is fine!)
    clearTimeout(timerId);
    // 3. Re-assign 'timerId' to a new setTimeout().
    timerId=setTimeout(()=>{
      callback(...args);
    }, delayInMilliseconds);
    // 4. Inside the setTimeout, execute callback(...args).
    // 5. Set the timeout duration to 'delayInMilliseconds'.
  }
}

// --- The Execution ---
const smartSearch = debounce(searchDatabase, 1000);

// The user types very fast...
smartSearch("M");
smartSearch("MA");
smartSearch("MAC");
smartSearch("MACB"); // Only this final call should actually run, 1 second later!
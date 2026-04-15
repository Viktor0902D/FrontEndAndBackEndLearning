// Exercise 1
//Call() is a method that allows you to call a function with a specific this value and arguments provided individually. This is useful when you want to borrow a method from another object or when you want to set the context of this explicitly.
function introduce(role, city) {
  console.log(`${this.name} is a ${role} from ${city}`);
}

const alice1 = { name: "Alice" };
const bob2 = { name: "Bob" };

// Use call() to print both lines:
// "Alice is a developer from Sofia"
// "Bob is a designer from Varna"
introduce.call(alice, "developer", "Sofia");
introduce.call(bob, "designer", "Varna");

// Exercise 2

function Person(name, age) {
  this.name = name;
  this.age  = age;
}

function Developer(name, age, language) {
  Person.call(this, name, age); // Call Person constructor with Developer's this
  this.language = language;
}

const dev = new Developer('Alice', 25, 'JavaScript');
console.log(dev.name);     // "Alice"
console.log(dev.age);      // 25
console.log(dev.language); // "JavaScript"

// Exercise 3
//Apply() is similar to call(), but it takes the arguments as an array instead of listing them one by one. This is useful when you have an array of arguments that you want to pass to a function.

function orderFood(starter, main, dessert) {
  console.log(
    `${this.customerName} ordered: ${starter}, ${main}, ${dessert}`
  );
}

const customer = { customerName: 'Alice' };
const order = ['Salad', 'Steak', 'Ice Cream'];

// The args are in an array — use apply()!
orderFood.apply(customer, order); // "Alice ordered: Salad, Steak, Ice Cream"

// Exercise 4
const scores = [78, 95, 62, 88, 100, 71];

// Use apply() with Math.max to find the highest score
// Math.max needs individual numbers, not an array!
const highest = Math.max.apply(null, scores);
const lowest  = Math.min.apply(null, scores);

console.log(highest); // 100
console.log(lowest);  // 62

//exercise 5
function buildProfile(age, city, job) {
  return `${this.name} | ${age} | ${city} | ${job}`;
}

const user = { name: 'Charlie' };

// Version A — using call():
const r1 = buildProfile.call(user, 30, 'Berlin', 'Engineer');

// Version B — rewrite using apply():
const r2 = buildProfile.apply(user, [30, 'Berlin', 'Engineer']);

// Both must log the same thing!
console.log(r1 === r2); // true

//Exercise 6
//Bind() is a method that creates a new function with a specific this value and optional arguments. This is useful when you want to create a function that has a fixed context or when you want to partially apply a function.

function greet(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const alice = { name: 'Alice' };
const bob   = { name: 'Bob'   };

// Create a bound function for each person
// so they can be called later independently
const greetAlice = greet.bind(alice);
const greetBob   = greet.bind(bob);

greetAlice('Hello', '!'); // "Hello, I'm Alice!"
greetBob('Hey', '.');    // "Hey, I'm Bob."

//Exercise 7

function multiply(x, y) {
  return x * y;
}

// Create these using bind() — pre-fill x!
const double = multiply.bind(null,2);  // always multiplies by 2
const triple = multiply.bind(null,3);  // always multiplies by 3
const times10 = multiply.bind(null,10); // always multiplies by 10

console.log(double(5));   // 10
console.log(triple(4));   // 12
console.log(times10(7)); // 70

//Exercise 8

const stopwatch = {
  seconds: 0,
  start() {
    const tick = function() {
      this.seconds++;
      console.log(`Time: ${this.seconds}s`);
    };
    setInterval(tick.bind(this), 1000); // ✅ this = stopwatch
  }
};

stopwatch.start(); // logs "Time: NaN" ❌

//Challenge

function logger(level, ...messages) {
  const prefix = `[${this.name}][${level}]`;
  messages.forEach(m => console.log(`${prefix} ${m}`));
}

const authService = { name: 'Auth'   };
const dbService   = { name: 'DB'     };
const apiLogs     = ['Started', 'Listening on 3000'];

// 1. Log a single error for Auth (run now, one arg)
logger.call(authService, 'ERROR', 'Invalid credentials');

// 2. Log startup messages for DB (args in array)
logger.apply(dbService, ['INFO', ...apiLogs]);

// 3. Create a dedicated Auth error logger for later
const authError =logger.bind(authService, 'ERROR');
authError('Token expired');
authError('Invalid credentials');
// Fix using bind() — not arrow function!
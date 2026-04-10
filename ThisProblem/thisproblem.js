
//Problem 1

const user = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
user.greet();

// const greetFn=user.greet.bind(user);
const greetFn = () => user.greet();
greetFn(); // This will not work as
// the context of 'this' is lost when the function is called without the user object.

//Problem 2

const timer = {
  name: "MyTimer",
  seconds: 0,
  start() {
    setInterval(function () {
      this.seconds++;
      console.log(`${this.name}: ${this.seconds} seconds`);
    }.bind(this), 1000);
  },
};

// timer.start(); // This will work correctly as the arrow function retains the context of 'this' from the timer object.

//Problem 3

const restaurant = {
  name: "Pasta Place",
  menu: ["Spaghetti", "Fettuccine", "Penne"],

   printMenu(){
    this.menu.forEach(function(item){
        console.log(`${this.name}: ${item}`);
    }.bind(this));
}

};

restaurant.printMenu(); // This will not work as the function is not defined within the restaurant object and does not have access to 'this.menu'.


//===Advanced exercise===//

//Exercise 1

const dog = {
  name: 'Rex',
  sound: 'Woof',
  describe() {
    return `${this.name} says ${this.sound}!`;
  }
};

const rabbit = { name: 'Bugs', sound: 'Squeak' };

// Make rabbit use dog's describe()
// WITHOUT adding describe to rabbit
console.log(dog.describe.call(rabbit));
console.log(dog.describe.apply(rabbit));

const rabbitDescribe=dog.describe.bind(rabbit);
console.log(rabbitDescribe()); // "Bugs says Squeak!"

//Exercise 2

class Scoreboard {
  constructor() {
    this.score = 0;
    this.btn = document.querySelector('#scoreBtn');
    this.btn.addEventListener('click', this.increment.bind(this));
    // ❌ this inside increment = the button!
  }

  increment() {
    this.score++;  // ❌ this = button element
    console.log(this.score);
  }
}
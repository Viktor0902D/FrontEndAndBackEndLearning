// 📝 Exercise 1: The Vehicle Assembly Line
// Let's test this mental model. We are going to build a memory-efficient vehicle factory.

// The Master Object
const vehiclePrototype = {
  startEngine: function() {
    console.log(`Vroom! The ${this.make} ${this.model} is running.`);
  },
  honk: function() {
    console.log("Beep beep!");
  }
};

// The Factory Function
const myCar=Object.create(vehiclePrototype);
myCar.make="Toyota";
myCar.model="Corolla";
// myCar.startEngine(); // Should print: "Vroom! The Toyota Corolla is running."
myCar.honk=function(){
    console.log("HONK HONK GET OUT OF THE WAY!");
}
// myCar.honk(); // Should print: "HONK HONK GET OUT OF THE WAY!"

const myTruck=Object.create(vehiclePrototype);
myTruck.make="Ford";
myTruck.model="F-150";
// myTruck.startEngine();
// myTruck.honk(); // Should print: "Beep beep!"


// 📝 Exercise: The RPG Class System
// Let's put this modern syntax to the test. We are going to build a character creation system for an RPG.

class Character{
    constructor(name){
        this.name=name;
        this.health=100;
    }
    takeDamage(amount){
        this.health-=amount;
        console.log(`${this.name} takes ${amount} damage! Health is now ${this.health}.`);
    }
}

class Warrior extends Character{
    constructor(name, weapon){
        super(name);
        this.weapon=weapon;
        this.rage=0;
    }

    attack(){
        console.log(`${this.name} swings with their ${this.weapon}!`);
        this.rage+=10;
    }
    takeDamage(amount){
        super.takeDamage(amount/2); // Warriors take half damage!
        console.log(`${this.name}'s armor deflected some damage! Health is now ${this.health}.`);
    }
}

    // const npc=new Character("Villager");
    // npc.takeDamage(20); // Villager takes 20 damage! Health is now 80.
    // const hero=new Warrior("Aragorn","sword");
    // hero.attack(); // Aragorn swings with their sword!
    // hero.takeDamage(20);

// 🟢 Easy: The Smart Home Appliance
// Let's make sure the basic muscle memory for the class keyword is locked in.
// The Concept: You are building the software for a smart home. Every appliance needs a brand and a way to turn on and off.

class Appliance{
    constructor(brand){
        this.brand=brand;
        this.isOn=false;
    }
    togglePower(){
        this.isOn=!this.isOn;
        console.log(`${this.brand} appliance is now ${this.isOn ? "ON" : "OFF"}.`);
    }
}

// const myFridge=new Appliance("Samsung");
// myFridge.togglePower(); // Samsung appliance is now ON.
// myFridge.togglePower(); // Samsung appliance is now OFF.


// 🟡 Intermediate: The Digital Library (Inheritance)
// Let's practice the extends and super() keywords to share logic across different types of items.

// The Concept: A library holds both Books and Movies. They share some core data, but have their own specific details.

class Media{
    constructor(title){
        this.title=title;
        this.isCheckedOut=false;
    }
    checkout(){
        this.isCheckedOut=true;
        console.log(`You checked out "${this.title}". Enjoy!`);
    }
}

class Book extends Media{
    constructor(title,author,pages){
        super(title);
        this.author=author;
        this.pages=pages;
    }
}

class Movie extends Media{
    constructor(title,director,runTime){
        super(title);
        this.director=director;
        this.runTime=runTime;
    }
    checkout(){
        super.checkout();
        console.log(`"Enjoy the film, directed by ${this.director}!"`);
    }
}

// const myBook=new Book("The Great Gatsby","F. Scott Fitzgerald",180);
// const myMovie=new Movie("Inception","Christopher Nolan",148);
// myBook.checkout(); // You checked out "The Great Gatsby". Enjoy!
// myMovie.checkout(); // You checked out "Inception". Enjoy! "Enjoy the film, directed by Christopher Nolan!"

// 🔴 Hard 1: The Prototype Detective (Raw Objects)
// class Bird {
//   fly() { console.log("Flapping my wings!"); }
// }
// class Penguin extends Bird {
//   fly() { console.log("I can't fly, but I can swim!"); }
// }
// const pingu = new Penguin();
// pingu.fly();

// Your Task:
// Recreate this exact architecture, but you are NOT allowed to use the class, extends, super, or new keywords.

const birdPrototype={
    fly:()=>{
        console.log("Flapping my wings!");
    }
}
const penguinPrototype=Object.create(birdPrototype);
penguinPrototype.fly=()=>{
    console.log("I can't fly, but I can swim!");
}
// const pingu=Object.create(penguinPrototype);
// pingu.fly(); // I can't fly, but I can swim!

// 🔴 Hard 2: The UI Component Tree (Abstract Methods & Composition)
// This is a true senior-level architectural pattern. This is exactly how frameworks like React were originally built!

// The Concept: We are going to build a fake HTML generator using classes.
//  We have a generic Component, but we also have specific components like Button and Container.

class Component{
    constructor(id){
        this.id=id;
    }
    render(){
        throw new Error("Render method must be implemented by subclass!");
    }
}

class Button extends Component{
    constructor(id,label){
        super(id);
        this.label=label;
    }
    render(){
        return `<button id="${this.id}">${this.label}</button>`;
    }
}

class Container extends Component{
    constructor(id,childrenArray){
        super(id);
        this.children=childrenArray;
    }
    render(){
        const childrenHTML=this.children.map(child=>child.render()).join("");
        return `<div id="${this.id}">${childrenHTML}</div>`;
    }
}

const btn1 = new Button("submit-btn", "Submit");
const btn2 = new Button("cancel-btn", "Cancel");
const myForm = new Container("form-wrapper", [btn1, btn2]);

console.log(myForm.render());
console.log(btn1.render());
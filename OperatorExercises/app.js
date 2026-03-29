//Exercise 1
const cars1 = ["Toyota", "Audi", "Mercedes"];
const cars2 = ["BMW", "Citroen"];
const carsnoopr = [cars1, cars2];
const cars = [...cars1, ...cars2];
console.log(cars);
console.log(carsnoopr);
//Exercise 2
const original = [12, 54, 21, 53];
const bad = original;
const good = [...original];
good.push(4);
console.log(...good);
console.log(...original);
//Exercise 3
const array1 = [4, 5, 2, 96, 3, 21];
console.log(sum(...array1));
console.log(sum(0, 1, 2, 3, 4, 4));

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
//Exercise 4
const stats = [4, 6, 43, 13, 45, 69, 64321, 6767676767];
const max = Math.max(...stats);
console.log(max);
const min = Math.min(...stats);
console.log(min);
//Exercise 5
const user1 = { name: "Larry", age: 34 };
const copy = { ...user1 };
const updatedUser1 = {
  ...user1,
  age: 32,
  role: "admin",
};
console.log(updatedUser1);
//Exercise 6
const employee = {
  age: 32,
  role: "IT specialist",
  salary: 3500,
};
const { salary, ...updatedEmployee } = employee;
console.log(updatedEmployee);
console.log(employee);
console.log(salary);

//Exercise 7
const items = ["b", "a", "f", "g", "i"];
const [first, ...rest] = items;
console.log(first);
const [last] = rest[rest.length - 1];
console.log(last);
const middle = rest.slice(0, -1);
console.log(...middle);
//Exercise 8
const fruits1 = ["banana", "apple", "kiwi"];
const fruits2 = ["orange", "grapefruit", "kiwi", "apple", "grape"];
const setoffruits = [...new Set([...fruits1, ...fruits2])].sort((a, b) =>
  a.localeCompare(b),
);
text = "";
for (let item of setoffruits) {
  text += item + " ";
}
console.log(text);
console.log(...setoffruits);
//Exercise 9
console.log(multiply(4, 52, 1, 3, 5, 32));
function multiply(first, ...rest) {
  return rest.map((number) => (number = number * first));
}
//Exercise 10
const user = {
  name: "Alice",
  address: { city: "Sofia", zip: 1000 },
};
const copyUser = {
  ...user,
  address: { ...user.address },
};
const truecopy = structuredClone(user);
truecopy.address.city = "Plovdiv";
copyUser.address.city = "Varna";
console.log(user.address.city);
console.log(copyUser.address.city);
console.log(truecopy.address.city);
//Exercise 11
const todolist = [
  { id: 1, text: "Learn spread", done: false },
  { id: 2, text: "Build project", done: false },
  { id: 3, text: "Ship it", done: false },
];
const updated = todolist.map((todoitem) => {
  if (todoitem.id === 2) {
    return { ...todoitem, done: true };
  }
  return todoitem;
});
console.log(updated);
console.log(todolist);
//Exercise 12
const pipe = (...fnc) => {
  return (value) => {
    return fnc.reduce((result, fn) => fn(result), value);
  };
};
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x * x;

const transform = pipe(double, addTen, square);
console.log(transform(5));
//Exercise 13
//Exercise 14
//Exercise 15
//Exercise 16

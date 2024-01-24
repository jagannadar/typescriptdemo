const square = (num) => num * num;
let result = square(5);
console.log(result);

const msg = () => "hello JS";
console.log(msg());

const mul = (a, b) => a * b;
let res = mul(5, 5);
console.log(res);

const person = {
  firstName: "Jagan",
  lastName: "Ramar",
};
const getFullName = (person) => `${person.firstName} ${person.lastName}`;

const fullName = getFullName(person);
console.log(fullName);

//function with default param/values
const greet = (username = "jag", age = 8) =>
  `Hello ${username} you are ${age} years old`;

console.log(greet());
console.log(greet("ram", "22"));

//rest param means ... var args

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
sum(1, 2, 3, 4, 5); //will act as array by using ...

const browserInfo = (browser = "chrome", ...details) => {
  console.log(`Browser : ${browser}`);
  console.log("Other details :", details);
};

browserInfo();
browserInfo("firefox", "hi", "this", "my", "browser");

const maxVal = (a, b, c) => {
  return Math.max(a, b, c);
};
const maxValue = maxVal(10, 23, 34);
console.log(maxValue);

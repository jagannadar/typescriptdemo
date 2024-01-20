//1. find unique value in array

let arr = [4, 3, 5, 4, 7, 5, 7];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

//2. Convert int to string

const num = 32;
const numStr = num + "";
console.log(numStr);
console.log(typeof numStr);
//OR
const numStr1 = String(num);
console.log(numStr1);
console.log(typeof numStr1);

//3. Float to int
const fval = 7.89;
const nval = parseInt(fval);
console.log(nval);

//4. Check of var is number

const value = "F";
if (typeof value === "number" && !isNaN(value)) {
  console.log(value + "is num");
} else {
  console.log(value + "is NOT num");
}

//5. Swap variable
let a = 6;
let b = 7;
[a, b] = [b, a];
console.log(a, b);

//6. Check if object has properties

const person = {
  name: "Jagan",
};
if (person.hasOwnProperty("name")) {
  console.log("Yes");
}
//7. Remove falsy value from array

let remove = [0, 1, false, NaN, null];
let newVal = remove.filter(Boolean);
console.log(newVal);

//8. convert string into upper case and lower case

const up = "Jagan";
const up1 = up.toUpperCase();
console.log(up1);
const up2 = up.toLowerCase();
console.log(up2);

//9. check if array contains specific value

const va = ["java", "Js", "Python"];
if (va.includes("Js")) {
  console.log("found");
}

//10. Check if arr is empty
const empty = [];
if (empty.length === 0) {
  console.log("Array is empty");
}

//11. generate random number

const min = 10;
const max = 50;
const randomnum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random num  ${randomnum}`);

//12. convert String to Number
const strNum = "66";
const x1 = parseFloat(strNum);
console.log(x1);
console.log(typeof x1);

//13. Join array elements into String
const words = ["Jagan", "Ramar"];
const newword = words.join("");
console.log(newword);

//14.get object property
const user = {
  name: "Jagan",
  age: 29,
};
console.log(user["age"]);
console.log(user.age);

//15. clone array or object
const marks = [10, 20, 30];
const dup = [...marks];
console.log(dup);
const dupuser = { ...user }; //spread operator
console.log(dupuser);

//16. Convert object into array
const emp = {
  name: "Jagan",
  age: 29,
};

//a. key array
const keyarray = Object.keys(emp);
console.log(keyarray);
//b. value array
const valarray = Object.values(emp);
console.log(valarray);
//c. key-values
const entryarray = Object.entries(emp);
console.log(entryarray);

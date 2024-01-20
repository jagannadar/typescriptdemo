//declaration of array
// let myArray = [];
// let num = [1, 4, 5, 67, 8];
// let fruits = ["app", "org"];

let lang = ["Java", "C++", "Python"];
//1.push add at end of the array
lang.push("ruby");
console.log(lang);

//2.pop remove/delete the last element
let num = [1, 4, 5, 67, 8];
num.pop();
console.log(num); // [1, 4, 5, 67]

//3.shift removes in beginning and returns first element
let fruits = ["app", "org"];
let first = fruits.shift();
console.log(first);
console.log(fruits);

//4.unshift adds in beginning of array and return length
let colors = ["red", "blue"];
colors.unshift("green");
console.log(colors);
console.log(colors.length);

//5.splice
let animals = ["dog", "cat"];
//animals.splice(1, 1, "lion");
//console.log(animals);
animals.splice(0, 1, "lion");
console.log(animals);

//6.slice
let pop = [1, 3, 4, 5, 6];
let newp = pop.slice(1, 4);
console.log(newp);

//7.concat
let pop1 = [1, 3, 4, 5, 6];
let animals1 = ["dog", "cat"];
console.log(pop1.concat(animals1));

//8.idexOf
let pop2 = [1, 3, 4, 5, 6, 3];
let index = pop2.indexOf(3);
console.log(index);
//find 2nd index
let secondIndex = pop2.indexOf(3, pop2.indexOf(3) + 1);
console.log(secondIndex);

//9. includes returns true/false
let test = ["admin", "cus"];
let flag = test.includes("jag");
console.log(flag);

//10. forEach:
let nf = [2, 3, 4, 5, 6];
nf.forEach((e) => {
  console.log(e * 5);
});

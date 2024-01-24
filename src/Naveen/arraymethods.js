//1.Map
let numbers = [1, 2, 3];
let newNum = numbers.map((e) => e * 2);
console.log(newNum);

let fahTemp = [32, 68, 89];

function fahToCel(fah) {
  return (fah - 32) * (5 / 9);
}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);

//2.Filter
let num = [1, 2, 3, 5, 8];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum);

let emp = [
  { name: "Jag", age: 6, gender: "male" },
  { name: "Jag1", age: 6, gender: "male" },
  { name: "Jag2", age: 6, gender: "mal" },
];

let newEmp = emp.filter((e) => {
  return emp.gender === "male";
});

console.log(newEmp);

//3.reduce it gives the final value of the accumalator

let numr = [1, 2, 3, 5, 8];
let sum = numr.reduce((acc, sum) => acc + sum, 0);
console.log(sum);

//max num in arr

let top = [3, 5, 6, 8, 9, 100, 10];
let maxNum = top.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
}, top[0]);
console.log(maxNum);

//min num
let minval = [3, 5, 6, 8, 9, 100, 10];
let minNum = top.reduce((min, num) => {
  if (num < min) {
    return num;
  } else {
    return min;
  }
}, top[0]);
console.log(minNum);

//cart -> price info
let cartItems = [
  {
    name: "Jeans",
    price: 600,
  },

  {
    name: "shoe",
    price: 900,
  },

  {
    name: "pant",
    price: 1600,
  },

  {
    name: "hat",
    price: 200,
  },
];

let total = cartItems.reduce((total, cartItems) => total + cartItems.price, 0);
console.log(total);


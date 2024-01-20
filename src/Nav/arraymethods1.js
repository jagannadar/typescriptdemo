// Every
//based on certain condition we can check each element satisfies condition
let num = [1, 2, 3, 4, 5];
let flag = num.every((e) => e < 10);
console.log(flag);

//some()
//at least one element satisfies condition
let sum = [1, 2, 3, 4, 5, 20];
let fg = sum.some((e) => e > 10);
console.log(fg);

//find()
//returns first element that matches given condition

let total = [1, 8, 3, 4, 5, 20];
console.log(total.find((e) => e % 2 === 0));

//lastIndexOf()

let lastIndex = [1, 8, 3, 4, 5, 20, 3];
let last = lastIndex.lastIndexOf(3);
console.log(last);

//reverse

let fruits = ["app", "grapes"];
let rev = fruits.reverse();
console.log(rev);

//sort

let mobile = ["mac", "samsung", "canon", "az"];
console.log(mobile.sort());

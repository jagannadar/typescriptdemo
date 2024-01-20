//1. functional declaration
function add(a, b) {
  return a + b;
}
console.log("Addition :" + add(5, 6));

//2. function expression : Anonymous function
const multiply = function (a, b) {
  return a * b;
};
console.log("Multiply :", multiply(3, 5));

//3. arrow function : Anonymous function
const divide = (a, b) => a / b;
const div = divide(10, 2);
console.log(div);

//4. Function Constructor
new Function("a", "b", "return a+b;");

//5. IIFE Immediate Invoked Function Expression
(function () {
  console.log("hi");
})();

//6. Generator function
//function* and yield keyword

function* generate() {
  yield 1;
  yield 2;
}

const gen = generate();
console.log(gen.next().value);
console.log(gen.next().value);

//7. Annonymous function
//no specific name

const numbers = [1, 3, 4, 5];
numbers.map(function (e) {
  return e * e;
});

const number = [1, 3, 4, 5];
numbers.map((e) => {
  return e * e;
});

//8. Recursive function
// A function which calls itself during execution
function factorial(n) {
  if (n == 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//9. Higher order

function add(a, b) {
  return a + b;
}

function operate(func, a, b) {
  return func(a, b);
}

const s = operate(add, 2, 3);
console.log(s);

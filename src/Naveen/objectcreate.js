//1. Object Literals {}
const user = {
  name: "Jagan",
  age: "29",
};
console.log(user.name);

//2. Constructor function
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
const c1 = new Car("BMW", 3445, 2000);
console.log(c1);
console.log(c1.brand);

//3. Class style

class Customer {
  constructor(name, product) {
    this.name = name;
    this.product = product;
  }

  addToCart() {
    console.log(`${this.product} added to cart`);
  }
}

const cust = new Customer("jag", "iphone");
console.log(cust.name);
console.log(cust.product);
cust.addToCart();

// prototype

const emp = {
  printInfo: function () {
    console.log(`hello ${this.name}`);
  },
};
const e1 = Object.create(emp);
e1.name = "jag";
e1.printInfo();

//Factory function return objects

function createDep(dept, name) {
  return {
    dept: dept,
    name: name,
    getDept: function () {
      console.log(`hello ${this.dept} and ${this.name}`);
    },
  };
}
const dept1 = createDep("abc", "jk");
dept1.getDept();

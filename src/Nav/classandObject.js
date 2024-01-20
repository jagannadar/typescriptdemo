//Class is blueprint or template for creating Object with similar properties and behaviours (methods)
//Every Object will get copy of class
class Car {
  constructor(name, price, color) {
    //no duplicate/overloading allowed
    this.name = name;
    this.price = price;
    this.color = color;
  }
  refuel() {
    console.log("Car is refueld");
  }
}
//new keyword: to create object
//whenever we create object constructor is called

const c1 = new Car("BMW", 910, "Black"); //c1 - reference variable
console.log(c1.name);
console.log(c1.refuel());

class Car {
  minSpeed = 100;
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Start engine Main");
  }
}

class Audi extends Car {
  startEngine() {
    console.log("Start engine Audi");
  }
}

const audi = new Audi();
audi.startEngine();
console.log(audi.minSpeed);

// Variable can also be inherited

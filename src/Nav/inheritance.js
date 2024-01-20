//Parent class/super class
class Auto {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getAutoInfo() {
    console.log("Automobile");
    return `"Auto info" + ${this.make}, ${this.model}, ${this.year}`;
  }
}

class Vehicle extends Auto {
  constructor(make, model, year) {
    super(make, model, year);
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.make}, ${this.model}, ${this.year}`;
  }

  startEng() {
    console.log("Start Engine" + this.make);
  }

  stopEng() {
    console.log("Stop Engine");
  }
}

//Sub class

class Car extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model, year); // super keyword used to call the parent class constructor
    this.fuelType = fuelType;
  }

  driverCar() {
    console.log("driving the car with model " + this.model);
  }
}

//another sub class
class Truck extends Vehicle {
  constructor(make, model, year, loading) {
    super(make, model, year); // super keyword used to call the parent class constructor
    this.loading = loading;
  }

  driverCar() {
    console.log(
      "driving the truck with model =" +
        this.model +
        " and capacity is " +
        this.loading
    );
  }
}

const c1 = new Car("BMW", 100, 2012, "petrol");
const t1 = new Truck("Tata", 110, 2022, 250);
c1.driverCar();
c1.startEng();
c1.stopEng();
console.log(c1.getAutoInfo());
console.log(c1.getInfo());
t1.driverCar();
t1.startEng();

// When multiple objects needs to share common values we can make it to static

class Car {
    static wheels = 4;
    constructor(name, model, price){
        this.name=name
        this.model= model
        this.price=price
        this.wheels=5
    }
    static stop(){
        console.log('stop')
    }
    drive(){
        console.log('drive')
    }
}

const c1 = new Car('Jagan','Ramar',10)
console.log(`${c1.name},${c1.model},${c1.price},${Car.wheels}`)
Car.stop() 
c1.drive() 
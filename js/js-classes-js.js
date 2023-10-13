// const createCar = (make, model, color, trans) => {
//
// }
// classes start with uppercase letters.
class Car {
    constructor(make, model, color, trans) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.trans = trans;
    }
    start() {
        console.log(`The ${this.color} ${this.make} ${this.model} has started.`);
    }
    stop() {
        console.log(`The ${this.color} ${this.make} ${this.model} has stopped.`);
    }

    drive() {
        console.log(`The ${this.color} ${this.make} ${this.model} started driving down the road.`)
    }
    crash() {
        console.log(`The ${this.color} ${this.make} ${this.model} HAS CRASHED!!!.`)
    }

    speed() {
        console.log(`The ${this.color} ${this.make} ${this.model} started SPEEDING!`)
    }
}

let car1 = new Car(`Chevy`, `Camero`, `white`, `manuel`);
let car2 = new Car(`Ford`, `Mustang`, `black`, `manuel`);
let car3 = new Car(`Nissan`, `240sx`, `blue`, `manuel`);
let car4 = new Car(`Toyota`, `Supra`, `grey`, `manuel`);
let car5 = new Car(`Mitsubishi`, `Eclipse`, `orange`, `manuel`);

// const carArray = [car1, car2, car3, car4, car5];

car1.start();
car2.start();
car3.start();
car4.start();
car5.start();
car1.speed();
car2.speed();
car3.speed();
car4.speed();
car2.crash();
car1.stop();







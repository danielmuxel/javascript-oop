console.clear();

// npm i -g nodemon
// nodemon -q script.js

class Car {
  constructor(speed = 200, seats, color, brand, model) {
    this.speed = speed;
    this.seats = seats;
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} started`);
  }

  driveForward() {
    console.log(`${this.brand} ${this.model} is driving forward`);
  }

  turnOnLights() {
    console.log(`${this.brand} ${this.model} lights are on`);
  }
}

const car = new Car(200, 5, "red", "BMW", "X5");
const car2 = new Car(300, 5, "red", "Mercedes", "C300");

console.log(car);

car.color = "blue";

console.log(car);
console.log(car.brand);

car.start();
car.driveForward();
car.turnOnLights();

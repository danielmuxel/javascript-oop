console.clear();

function Car(speed, seats, color, brand, model) {
  this.speed = speed;
  this.seats = seats;
  this.color = color;
  this.brand = brand;
  this.model = model;

  this.start = function () {
    console.log(`${this.brand} ${this.model} started`);
  };
}

const car = new Car(200, 5, "red", "BMW", "X5");

car.color = "blue";

console.log(car);

car.start();

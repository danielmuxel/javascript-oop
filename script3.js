console.clear();

car = {
  speed: 200,
  seats: 5,
  color: "red",
  brand: "BMW",
  model: "X5",
  start: function () {
    console.log(`${this.brand} ${this.model} started`);
  },
};

car.color = "blue";

console.log(car);

car.start();

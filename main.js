class Vehicle {
  constructor(name, year, speed) {
    this.name = name;
    this.year = year;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.name} can drive`);
  }
}

// Derived Class
class Car extends Vehicle {
  constructor(name, year, speed, color) {
    super(name, year, speed);
    this.wheels = 4;
    this.color = color;
  }
}

const newCar = new Car("BMW", 2019, "150MPH", "Red");
console.log("newCar", JSON.stringify(newCar));
newCar.drive();

class Motorcycle extends Vehicle {
  constructor(name, year, speed) {
    super(name, year, speed);
    this.wheels = 2;
  }
}

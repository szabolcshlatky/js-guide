`use strict`;

class Car {
  constructor() {
    this.progress = 0;
    this.speed = Math.random();
  }

  tick() {
    this.progress += this.speed;
    this.speed += Math.random() - 0.5;
  }
}

class Race {
  constructor(cars, time = new Time()) {
    this.cars = cars;
    this.time = time;
  }

  start() {
    setInterval(() => {
      this.cars.forEach((car) => car.tick());
    }, this.time.tickRate);
  }
}

class Time {
  constructor(tickRate = 1000) {
    this.tickRate = tickRate;
  }
}

`use strict`;

export default function classes() {
  /* Write a program that simulates a time related scene. 

    Assignment 1)

    You have an array of racing cars. Simulate a race and bet for the winner. Each second, the cars make random progress. Read a bet from the user and display if the user won the bet, once the race is over (all the cars have finished). The passage of time is called a tick. Each second is a tick. Car positions update during each tick.

    Assignment 2.1)

    Extend the previous simulation. Each second, cars randomly increase or decrease  their current speed. Their progress is calculated based on the speed.

    Assignmrnt 2.2)

    Write specialized Car classes that have different acceleration and maximum speed parameters.

    Assignment 3)

    Introduce a Race class. The race needs to be started by calling the start method of the class.

    Assignment 4)

    Write a Time class. The Race class receives 
    a Time instance and uses it the define how fast time goes by. Default is one tick per second.
  */

  class Car {
    constructor(name) {
      this.name = name;
      this.position = 0;
      this.speed = Math.random();
    }

    move() {
      this.speed += Math.random() - 0.5;
      this.position += this.speed;
      return this;
    }
  }

  class FastCar extends Car {
    constructor(name) {
      super(name);
      this.speed = Math.random() * 2;
    }
  }

  class SlowCar extends Car {
    constructor(name) {
      super(name);
      this.speed = Math.random() / 2;
    }
  }

  class Race {
    constructor(cars, bet) {
      this.cars = cars;
      this.bet = bet;
    }

    start(time) {
      const raceInterval = setInterval(() => {
        this.cars.forEach((car) => {
          car.move();
          if (car.position >= 100) {
            clearInterval(raceInterval);
            console.log(car.name === this.bet ? 'You won!' : 'You lost!');
          }
        });
      }, 1000 / time.tickRate);
    }
  }

  class Time {
    constructor(tickRate = 1) {
      this.tickRate = tickRate;
    }
  }

  const cars = [new Car('Car 1'), new FastCar('Car 2'), new SlowCar('Car 3')];
  const time = new Time();
  const race = new Race(cars, `Car 3`);

  race.start(time);

  /* Write a program that simulates 

    You have two robots fighting. 

    Assignment 1)

    Robots have health, attack and defense points.

    Each second robots take turns. Each turn, the robots decide their next action.
    An action can be offensive or defensive. 

    If a robot attacks, the attack point is the damage dealt. If the other robot defends,
    defense points are subtracted from the attack points.

    Assignment 2)

    Robots can have a weapon and a shield. The weapon deals damage and the shield
    has armor. The damage and the shield is added to the attack and defense points
    of the robot.

    Assignment 3) 


    Robots can have multiple arms. Each arm can attack or defend. A robot may attack
    or defend with any number of arms. During an attack, the total damage dealt is
    the total number of attacking arms * base damage (weapon + attack), minus the
    total defense point of the target (number of defending arms * base defense (shield + defense))

    Assignment 4)

    Robots can have strategies. A strategy can prefer setting the attack and defense
    for each arm.

    There are two strategies: offensive means more than half of the arms will be
    attacking. Defensive means more than half of the arms will be defending. Each turn, the arms are reset based on the strategy.
  */

  class Robot {
    constructor(health, attack, defense, weapon, shield, arms, strategy) {
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.weapon = weapon;
      this.shield = shield;
      this.arms = arms;
      this.strategy = strategy;
    }

    calculateAttack() {
      return this.arms * (this.weapon + this.attack);
    }

    calculateDefense() {
      return this.arms * (this.shield + this.defense);
    }

    setStrategy(strategy) {
      this.strategy = strategy;
    }
  }

  function simulateFight(robot1, robot2) {
    while (robot1.health > 0 && robot2.health > 0) {
      if (robot1.strategy === 'offensive') {
        robot2.health -= robot1.calculateAttack() - robot2.calculateDefense();
      } else {
        robot1.health -= robot2.calculateAttack() - robot1.calculateDefense();
      }

      // Switch strategies
      let temp = robot1.strategy;
      robot1.setStrategy(robot2.strategy);
      robot2.setStrategy(temp);
    }

    return robot1.health > 0 ? 'Robot 1 wins' : 'Robot 2 wins';
  }

  let robot1 = new Robot(100, 10, 5, 2, 3, 2, 'offensive');
  let robot2 = new Robot(100, 8, 6, 2, 2, 2, 'defensive');

  let result = simulateFight(robot1, robot2);

  console.log(result);
}

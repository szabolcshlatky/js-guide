import { extend, get } from 'lodash';

`use strict`;

export default function oop() {
  /* Object Oriented Programming */

  /* this operator keyword */

  console.log(this);

  const welcome = function (rank) {
    console.log(`Welcome ${rank} ${this.name}`);
  };

  const ben = {
    name: `Kenobi`,
  };
  welcome.call(ben, `General`);

  const kyle = {
    name: `Katarn`,
  };
  welcome.apply(kyle, [`Commander`]);

  const welcoming = welcome.bind(ben, `General`);
  console.log(welcoming);
  welcoming();

  /* Constructor Functions & Prototype */

  function Constructor(...topics) {
    // this = {}; (implicitly)

    // add properties to 'this'
    this.topics = topics;

    // return this; (implicitly)
  }

  console.log(Constructor);

  Constructor.prototype.getTopics = function () {
    return this.topics;
  };

  /* new operator keyword */

  const constructor = new Constructor(`this keyword`, `new operator`, `prototype`, `constructor functions`, `classes`);
  console.log(constructor);
  console.log(constructor.getTopics());

  /* instanceof operator */

  console.log(constructor instanceof Constructor);

  const constructorConstruct = new constructor.constructor(`instanceof`, `super`, `extend`, `get`, `set`, `static`);
  console.log(constructorConstruct);

  /* Inheritance */

  function Inheritance(extra, ...topics) {
    Constructor.call(this, ...topics);
    this.extra = extra;
  }

  Inheritance.prototype = Object.create(Constructor.prototype);
  const inheritance = new Inheritance(`inheritance`, constructor.topics);

  console.log(inheritance);

  /* Class */

  /* constructor(), static, Getters & Setters, private fields, mixins */

  class Player {
    #male = null;

    constructor(username, age) {
      this.username = username;
      this.age = age;
      this.score = 0;
    }

    static countUsers(players) {
      console.log(players);
      return this;
    }

    gender(male) {
      console.log(this.#male);
      return this;
    }

    get score() {
      return this._score;
    }

    set score(value) {
      if (value !== Infinity) {
        this._score = value++;
      } else {
        throw "Admins can't have a score!";
      }
    }
  }

  const mixin1 = {
    login() {
      console.log(`${this.username} just logged in`);
      return this;
    },
    logout() {
      console.log(`${this.username} just logged out`);
      return this;
    },
  };

  const mixin2 = {
    birthDay() {
      this.age++;
      console.log(`${this.username} is now ${this.age} years old`);
      return this;
    },
  };

  extend(Player.prototype, mixin1, mixin2);

  console.log(Player === Player.prototype.constructor);
  console.log(Object.getOwnPropertyNames(Player.prototype));
  console.log(Object.getOwnPropertyNames(Player.prototype.constructor));

  /* extends, super(), override properties & methods */

  class Admin extends Player {
    constructor(username, age, score) {
      super(username, age);
      this.score = null;
    }
    deletePlayer(p) {
      players = players.filter((player) => player.username !== p.username);
      return this;
    }

    get score() {
      return this._score;
    }

    set score(value) {
      if (value !== Infinity) {
        this._score = -Infinity;
      } else {
        throw "Admins can't have a score!";
      }
    }
  }

  const playerOne = new Player(`mario`, 42);
  playerOne.login().birthDay().logout();

  const playerTwo = new Player(`peach`, 38);
  const adminOne = new Admin(`luigi`, 40);

  console.log(playerOne);
  console.log(playerTwo);
  console.log(adminOne);

  playerOne.score = 100;
  playerOne.score = 200;
  console.log(playerTwo.score);

  console.log(adminOne);
  let players = [playerOne, playerTwo, adminOne];
  console.log(players);
  Player.countUsers(players);

  adminOne.deletePlayer(playerTwo);
  console.log(players);
  Player.countUsers(players);
}

`use strict`;

import _ from 'lodash';

/* Custom Map */

export default class eMap extends Map {
  #frozen;
  #deletedKeys;

  constructor() {
    super();
    this.#frozen = false;
    this.#deletedKeys = new Set();
  }

  get(key) {
    return super.get(key);
  }

  set(key, value) {
    if (!this.#frozen) {
      super.set(key, value);
    } else {
      throw new Error('Map is already frozen');
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  freeze() {
    if (!this.#frozen) {
      this.#frozen = true;
    } else {
      throw new Error('Map is already frozen');
    }
  }

  delete(key) {
    if (!this.#frozen) {
      this.#deletedKeys.add(key);
      return super.delete(key);
    } else {
      throw new Error('Map is already frozen');
    }
  }

  clear() {
    if (!this.#frozen) {
      for (let key of this.keys()) {
        this.#deletedKeys.add(key);
      }
      super.clear();
    } else {
      throw new Error('Map is already frozen');
    }
  }

  getDeletedKeys() {
    return Array.from(this.#deletedKeys);
  }

  clearDeletedKeys() {
    this.#deletedKeys.clear();
    return this.#deletedKeys;
  }

  // Convert the map to an object
  toObject() {
    let obj = {};
    for (let [k, v] of this) {
      obj[k] = v;
    }
    return obj;
  }

  // Convert the map to a JSON string
  toJSON() {
    return JSON.stringify(this.toObject());
  }

  // Static method to create a new eMap from an object
  static fromObject(obj) {
    let eMap = new this();
    for (let k in obj) {
      if (obj.hasOwnProperty(k) && obj[k] !== undefined) {
        eMap.set(k, obj[k]);
      }
    }
    return eMap;
  }

  // Static method to create a new eMap from a JSON string
  static fromJSON(jsonStr) {
    return this.fromObject(JSON.parse(jsonStr));
  }
}

/* Examples */

// class exampleEMap extends eMap {
//   constructor(name, age, male) {
//     super();
//     this.set('name', name);
//     this.set('age', age);
//     this.set('male', male);
//   }
// }

// let person = new exampleEMap('Szabolcs', 30, true);
// console.log(person);
// console.log(person.size);
// console.log(person.get(`name`));
// person.set(`id`, `098594SA`);

// let personObj = person.toObject();
// console.log(personObj);

// let personMap = exampleEMap.fromObject(personObj);
// console.log(personMap);

// console.log(personMap.delete(`male`));
// console.log(personMap);

// console.log(personMap.getDeletedKeys());
// console.log(personMap.clearDeletedKeys());

// personMap.freeze();
// console.log(personMap);

// personMap.clear();
// console.log(personMap.isEmpty());

// console.log(personMap.entries());
// console.log(personMap.keys());
// console.log(personMap.values());
// personMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// let personMapJSON = personMap.toJSON();
// console.log(personMapJSON);

// let personMapFromJSON = eMap.fromJSON(personMapJSON);
// console.log(personMapFromJSON);

// let clonedPersonMap = _.cloneDeep(personMapFromJSON);
// console.log(clonedPersonMap);

/** Fetch API
 * let fetchedData = '{"name":"John","age":30,"male":true}'; // JSON string
 * let fetchedDataMap = eMap.fromJSON(fetchedData);
 * console.log(fetchDataMap);
 */

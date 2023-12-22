`use strict`;

import _ from 'lodash';
import eMap from '../base/emap.js';

export default function localstorage() {
  /* Local Storage */

  console.log(localStorage);

  /* Example with eMap */

  class exampleEMap extends eMap {
    constructor(name, age, male) {
      super();
      this.set('name', name);
      this.set('age', age);
      this.set('male', male);
    }
  }

  let person = new exampleEMap('Szabolcs', 30, true);

  console.log(person);
  console.log(person.size);
  console.log(person.get(`name`));
  person.set(`id`, `098594SA`);

  /* Properties & Methods */

  localStorage.setItem(`id`, person.get(`id`));
  let localId = localStorage.getItem(`id`);
  console.log(localId);

  localStorage.setItem(`name`, person.get(`name`));
  let localName = localStorage.getItem(`name`);
  console.log(localName);

  localStorage.setItem(`id`, NaN);
  localId = localStorage.getItem(`id`);
  console.log(localId);

  localStorage.removeItem(`id`);
  localId = localStorage.getItem(`id`);
  console.log(localId);

  console.log(localStorage.length);

  let personObj = person.toObject();
  console.log(personObj);

  let personMap = exampleEMap.fromObject(personObj);
  console.log(personMap);
  console.log(personMap.delete(`male`));
  console.log(personMap);
  console.log(personMap.getDeletedKeys());
  console.log(personMap.clearDeletedKeys());

  // personMap.freeze();

  console.log(personMap);
  personMap.clear();

  console.log(personMap.isEmpty());
  console.log(personMap.entries());
  console.log(personMap.keys());
  console.log(personMap.values());

  personMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  let personMapJSON = personMap.toJSON();
  console.log(personMapJSON);

  let personMapFromJSON = eMap.fromJSON(personMapJSON);
  console.log(personMapFromJSON);

  localStorage.setItem(`person`, personMapJSON);
  let storagePerson = localStorage.getItem(`person`);
  console.log(storagePerson);

  let storagePersonMap = eMap.fromJSON(storagePerson);
  console.log(storagePersonMap);

  localStorage.clear();
  console.log(localStorage);

  let clonedPersonMap = _.cloneDeep(personMapFromJSON);
  console.log(clonedPersonMap);
}

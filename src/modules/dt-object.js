`use strict`;

import _ from 'lodash';

export default function object() {
  /* Object literal */

  let emptyObject = {};

  let id = `098594SA`;
  let greeting = function () {
    console.log(`Hello there!`);
  };

  let object = {
    id,
    name: `Szabolcs Hlatky`,
    age: 30,
    male: true,
    job: `student`,
    family: [
      {
        name: `Dóra Burucs`,
        age: 27,
        male: false,
      },
      {
        name: `Elizabet Hlatky`,
        age: 2.5,
        male: false,
      },
      {
        name: `Lídia Hlatky`,
        age: 0.5,
        male: false,
      },
    ],

    working: function (job) {
      console.log(`This is a method (function in an object): \n`, this.working);
      this.job = job;
      return this.job;
    },

    introduction() {
      console.log(`"introduction() {}" is also a method like (job: function () {}): \n`, this);
      return this;
    },
  };

  console.log(emptyObject);
  console.log(object);

  /* . notation => using properties & methods */

  console.log(object.name);
  console.log((object.hobbies = [`traveling`, `writing`, `creating board games`]));
  console.log((object.greeting = greeting));
  console.log((object.age = 30.5));
  console.log(delete object.hobbies);

  object.working(`developer`);

  /* [] notation & computed properties */

  console.log(object[`name`]);
  console.log(object[0]);
  console.log((object[`hobbies`] = [`traveling`, `writing`, `creating board games`]));
  console.log((object[`age`] = 30));
  console.log(delete object[`hobbies`]);

  object[`introduction`]();

  const familyNameKey = `family`;
  console.log((object[familyNameKey][0].name = `Eszter Hlatkyné`));

  const computedKey = `wifey`;
  const computedProperty = `phone number`;
  const computedBoolean = `female`;
  emptyObject = {
    [computedKey]: object[familyNameKey][0].name,
    [computedProperty + ' +']: 36702485272,
    [`gender - ${computedBoolean}`]: true,
  };

  console.log(emptyObject);

  /* Iterations */

  console.log(`hobbies` in object);

  for (let key in emptyObject) {
    console.log(key, emptyObject[key]);
  }

  console.log(Object.entries(emptyObject));
  console.log(Object.keys(emptyObject));
  console.log(Object.values(emptyObject));

  /* Cloning */

  const emptyObjClone = {};
  for (const key in emptyObject) {
    emptyObjClone[key] = emptyObject[key];
  }
  emptyObjClone.age = 27;
  console.log(emptyObject);
  console.log(emptyObjClone);
  console.log(emptyObjClone === emptyObject);

  const emptyObjClone1 = Object.create(emptyObjClone);
  console.log(emptyObjClone1);
  console.log(emptyObjClone1 === emptyObjClone);

  const emptyObjClone2 = Object.assign(
    {
      /* returning 'target' object */
    },
    emptyObjClone1,
    object.family,
  );
  console.log(emptyObjClone2);
  console.log(emptyObjClone2 === emptyObjClone1);

  const emptyObjClone3 = structuredClone(emptyObjClone2);
  console.log(emptyObjClone3);
  console.log(emptyObjClone3 === emptyObjClone2);

  const emptyObjClone4 = JSON.parse(JSON.stringify(emptyObjClone3));
  console.log(emptyObjClone4);
  console.log(emptyObjClone4 === emptyObjClone3);

  const emptyObjClone5 = { job: `mother`, ...emptyObjClone4 };
  console.log(emptyObjClone5);
  console.log(emptyObjClone5 === emptyObjClone4);

  const spreadObject = {
    ...emptyObjClone,
    ...emptyObjClone2,
    ...emptyObjClone3,
    ...emptyObjClone4,
    ...emptyObjClone5,
  };
  console.log(spreadObject);

  const objectClone = _.cloneDeep(object);
  console.log(objectClone);
  console.log(objectClone === object);

  console.log(`Optional-chaining: \n`, object?.family?.[0]?.name);

  /* Methods */

  console.log(spreadObject.hasOwnProperty(`age`));
  console.log(Object.freeze(emptyObject));
  console.log(Object.isFrozen(emptyObject));
  console.log(Object.isFrozen(spreadObject));

  /* Map */

  let map = new Map();
  map.set(`stringKey`, `stringValue`);
  map.set(123, `numberValue`);
  map.set(true, `booleanValue`);
  map.set(emptyObject, `emptyObjectValue`);

  /* Properties & Methods */

  console.log(map);
  console.log(map.size);
  console.log(map.get(`stringKey`));
  console.log(map.has(`stringKey`));
  console.log(map.delete(`stringKey`));
  console.log(map.clear());

  /* Iterations */

  map.set(emptyObject, `frozen`);
  map.set(emptyObjClone, NaN);
  map.set(emptyObjClone1, false);
  map.set(emptyObjClone2, null);
  map.set(emptyObjClone3, undefined);
  map.set(emptyObjClone4, 0);
  map.set(emptyObjClone5, ``);
  map.set(objectClone, 1);

  console.log(map.keys());
  console.log(map.values());
  console.log(map.entries());
  map.forEach((value, key, map) => {
    console.log(key, value);
  });

  /* Type Conversion */

  let objectFromMap = Object.fromEntries(map);
  let mapFromObject = new Map(Object.entries(objectFromMap));

  console.log(objectFromMap);
  console.log(mapFromObject);

  /* WeakMap */

  let weakMap = new WeakMap();
  let weakMapObj = {};
  weakMap.set(weakMapObj, `non-primitive value`);
  console.log(weakMap.get(weakMapObj));

  weakMapObj = null;
  console.log(`Removed from the memory: \n`, weakMap.get(weakMapObj));
}

`use strict`;

export default function datatypeof() {
  /* Data-types & typeof keyword */

  const automatic = undefined;
  console.log(automatic);
  console.log(typeof automatic);

  const nullObject = null;
  console.log(nullObject);
  console.log(typeof nullObject);

  const number = NaN;
  const Num = new Number();
  console.log(number);
  console.log(typeof number);
  console.log(Num);
  console.log(typeof Num);

  const bigint = BigInt(0n);
  const bigInt = BigInt.prototype;
  console.log(bigint);
  console.log(typeof bigint);
  console.log(bigInt);
  console.log(typeof bigInt);

  const mathObject = Math;
  console.log(mathObject);
  console.log(typeof mathObject);

  const string = `${"' '" + '" "'}`;
  const str = new String();
  console.log(string);
  console.log(typeof string);
  console.log(str);
  console.log(typeof str);

  const boolean = true || false;
  const bool = new Boolean();
  console.log(boolean);
  console.log(typeof boolean);
  console.log(bool);
  console.log(typeof bool);

  const symbol = Symbol();
  const sym = Symbol.prototype;
  console.log(symbol);
  console.log(typeof symbol);
  console.log(sym);
  console.log(typeof sym);

  const regex = new RegExp();
  console.log(regex);
  console.log(typeof regex);

  const date = new Date();
  console.log(date);
  console.log(Date.prototype);
  console.log(typeof date);

  const func = new Function();
  console.log(func);
  console.log(typeof func);

  const array = new Array();
  console.log(array);
  console.log(typeof array);

  const set = new Set();
  console.log(set);
  console.log(typeof set);

  const weakSet = new WeakSet();
  console.log(weakSet);
  console.log(typeof weakSet);

  const object = new Object();
  console.log(object);
  console.log(typeof object);

  const map = new Map();
  console.log(map);
  console.log(typeof map);

  const weakMap = new WeakMap();
  console.log(weakMap);
  console.log(typeof weakMap);

  const promise = new Promise(() => {});
  console.log(promise);
  console.log(typeof promise);

  const xhr = new XMLHttpRequest();
  console.log(xhr);
  console.log(typeof xhr);

  const error = new Error();
  console.log(error);
  console.log(typeof error);

  const url = new URL(`http://localhost:5173/`);
  console.log(url);
  console.log(typeof url);

  /* Primitive DTs */

  let primitive_1 = undefined;
  let primitive_2 = primitive_1;
  console.log(primitive_1);
  console.log(primitive_2);

  primitive_1 = null;
  console.log(primitive_1);
  console.log(primitive_2);

  /* Reference (object) DTs */

  const reference_1 = {
    primitive_1,
    primitive_2,
  };

  const reference_2 = reference_1;
  console.log(reference_1);
  console.log(reference_2);

  reference_1.primitive_2 = null;
  console.log(reference_1);
  console.log(reference_2);
}

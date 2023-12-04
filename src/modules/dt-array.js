`use strict`;

export default function array() {
  /* Array */

  let arrayOfStrings = [`Array`, `Set`, `TypedArray`, `ArrayBuffer`, `WeakSet`, `NodeList`, `HTMLCollection`];
  let arrayOfNumbers = [0, 1, 31, 5, 42, 5, 23];
  let mixedArray = [true, false, ...arrayOfStrings, ...arrayOfNumbers];
  let arrayOfObjects = [
    {
      property: `length`,
      stars: 5,
      iteration: false,
      description: `Returns the number of elements in the array.`,
    },
    {
      method: `includes()`,
      stars: 5,
      iteration: false,
      description: `Returns true if the array contains the value, otherwise false.`,
    },
    {
      method: `indexOf()`,
      stars: 4,
      iteration: false,
      description: `Returns the first index of the value in the array, if it exists, otherwise -1.`,
    },
    {
      method: `lastIndexOf()`,
      stars: 3,
      iteration: false,
      description: `Returns the last index of the value in the array, if it exists, otherwise -1.`,
    },
    {
      method: `find()`,
      stars: 5,
      iteration: true,
      description: `Returns the first value that satisfies the condition, otherwise undefined.`,
    },
    {
      method: `findIndex()`,
      stars: 2,
      iteration: true,
      description: `Returns the index of the first value that satisfies the condition, otherwise -1.`,
    },
    {
      method: `findLast()`,
      stars: 4,
      iteration: true,
      description: `Returns the last value that satisfies the condition, otherwise undefined.`,
    },
    {
      method: `findLastIndex()`,
      stars: 1,
      iteration: true,
      description: `Returns the index of the last value that satisfies the condition, otherwise -1.`,
    },
    {
      method: `pop()`,
      stars: 4,
      iteration: false,
      description: `Removes the last element from the array, returns it.`,
    },
    {
      method: `push()`,
      stars: 5,
      iteration: false,
      description: `Adds an element to the end of the array, returns the new length.`,
    },
    {
      method: `shift()`,
      stars: 2,
      iteration: false,
      description: `Removes the first element from the array, returns it.`,
    },
    {
      method: `unshift()`,
      stars: 3,
      iteration: false,
      description: `Adds an element to the beginning of the array, returns the new length.`,
    },
    {
      typeConversion: `Array()`,
      stars: 1,
      iteration: false,
      description: `Creates a new array.`,
    },
    {
      typeConversion: `Array.isArray()`,
      stars: 5,
      iteration: false,
      description: `Returns true if the argument is an array.`,
    },
    {
      typeConversion: `Array.of()`,
      stars: 4,
      iteration: false,
      description: `Creates a new array from a variable number of arguments.`,
    },
    {
      typeConversion: `Array.from()`,
      stars: 3,
      iteration: false,
      description: `Creates a new array from an array-like or iterable object.`,
    },
    {
      typeConversion: `join()`,
      stars: 5,
      iteration: false,
      description: `Joins all elements of the array into a string.`,
    },
    {
      typeConversion: `toString()`,
      stars: 4,
      iteration: false,
      description: `Returns a string representation of the array.`,
    },
    {
      typeConversion: `toLocaleString()`,
      stars: 3,
      iteration: false,
      description: `Returns a localized string representation of the array.`,
    },
    {
      method: `slice()`,
      stars: 3,
      iteration: false,
      description: `Returns a shallow copy of a portion of the array.`,
    },
    {
      method: `splice()`,
      stars: 2,
      iteration: false,
      description: `Changes the contents of an array by removing or replacing existing elements and/or adding new elements.`,
    },
    {
      method: `toSpliced()`,
      stars: 4,
      iteration: false,
      description: `Changes the contents of an array by removing or replacing existing elements and/or adding new elements (immutable).`,
    },
    {
      method: `filter()`,
      stars: 5,
      iteration: true,
      description: `Creates a new array with all elements that pass the test implemented by the provided function.`,
    },
    {
      method: `concat()`,
      stars: 3,
      iteration: false,
      description: `Returns a new array that is this array joined with other array(s) and/or value(s).`,
    },
    {
      method: `flat()`,
      stars: 2,
      iteration: false,
      description: `Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.`,
    },
    {
      method: `flatMap()`,
      stars: 4,
      iteration: true,
      description: `Creates a new array with the results of calling a provided function on every element in the calling array.`,
    },
    {
      method: `map()`,
      stars: 5,
      iteration: true,
      description: `Creates a new array with the results of calling a provided function on every element in the calling array. (immutable)`,
    },
    {
      method: `forEach()`,
      stars: 4,
      iteration: true,
      description: `Executes a provided function once for each array element.`,
    },
    {
      method: `reduceRight()`,
      stars: 2,
      iteration: true,
      description: `Executes a reducer function (right-to-left) (that you provide) on each element of the array, resulting in a single output value.`,
    },
    {
      method: `reduce()`,
      stars: 5,
      iteration: true,
      description: `Executes a reducer function (left-to-right) (that you provide) on each element of the array, resulting in a single output value.`,
    },
    {
      method: `every()`,
      stars: 3,
      iteration: true,
      description: `Returns true if every element in this array satisfies the provided testing function.`,
    },
    {
      method: `some()`,
      stars: 1,
      iteration: true,
      description: `Returns true if at least one element in this array satisfies the provided testing function.`,
    },
    {
      method: `sort()`,
      stars: 3,
      iteration: true,
      description: `Sorts the elements of an array in place and returns the array.`,
    },
    {
      method: `reverse()`,
      stars: 2,
      iteration: true,
      description: `Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.`,
    },
    {
      method: `toSorted()`,
      stars: 5,
      iteration: true,
      description: `Sorts the elements of an array in place and returns the array (immutable).`,
    },
    {
      method: `toReversed()`,
      stars: 4,
      iteration: true,
      description: `Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first (immutable).`,
    },
  ];

  console.log(arrayOfStrings);
  console.log(arrayOfNumbers);
  console.log(mixedArray);
  console.log(arrayOfObjects);

  /* Properties & Methods & Type Conversion */

  console.log(arrayOfObjects.length);
  console.log(arrayOfNumbers[0]);
  console.log(arrayOfNumbers[arrayOfNumbers.length - 1]);
  console.log((arrayOfNumbers[4] = 48));
  console.log(arrayOfNumbers + arrayOfNumbers);
  console.log(mixedArray[2]);
  console.log(arrayOfObjects[0].property);
  console.log(arrayOfObjects[0][`property`]);
  console.log(arrayOfObjects[0][`method`]);
  console.log(arrayOfObjects[0][`typeConversion`]);
  console.log(mixedArray.includes(false));
  console.log(mixedArray.indexOf(5));
  console.log(mixedArray.lastIndexOf(5));
  console.log(mixedArray.pop());
  console.log(mixedArray.push(2));
  console.log(mixedArray.shift());
  console.log(mixedArray.unshift(2));
  console.log(mixedArray.slice(2, 4));
  console.log(mixedArray.splice(2, 4, 2));
  console.log(mixedArray.toSpliced(2, 4, 2));
  console.log(arrayOfStrings.concat(arrayOfNumbers));
  console.log(mixedArray.flat());

  console.log(Array(1, 2, 3));
  console.log(Array.isArray(Array(1, 2, 3)));
  console.log(Array.of(1, 2, 3));
  console.log(Array.from(new Set([1, 2, 3, 2])));
  console.log(mixedArray.join(`, `));
  console.log(mixedArray.toString());
  console.log(mixedArray.toLocaleString());

  /* Iterations */

  /* find(), findIndex(), findLast() & findLastIndex() */

  const find = arrayOfNumbers.find(
    (currentElement, currElementIndex, actualArray) => {
      console.log(currElementIndex, currentElement, actualArray);
      return currentElement === 5;
    } /* thisArg */,
  );
  console.log(find);

  const findIndex = arrayOfNumbers.findIndex((curr /* index, arr */) => {
    console.log(curr);
    return curr === 5;
  });
  console.log(findIndex);

  const findLast = arrayOfNumbers.findLast((curr) => {
    console.log(curr);
    return curr === 5;
  });
  console.log(findLast);

  const findLastIndex = arrayOfNumbers.findLastIndex((curr) => {
    console.log(curr);
    return curr === 5;
  });
  console.log(findLastIndex);

  /* filter() */

  const filter = arrayOfNumbers.filter((curr) => {
    console.log(curr);
    return curr >= 5;
  });
  console.log(filter);

  /* map() & flatMap() */

  const map = arrayOfNumbers.map((curr) => {
    console.log(curr);
    return curr % 2;
  });
  console.log(map);

  const flatMap = arrayOfNumbers.flatMap((curr) => {
    console.log(curr);
    return curr++;
  });
  console.log(flatMap);

  /* forEach() */

  const forEach = arrayOfStrings.forEach((curr, index) => {
    console.log(index, curr);
  });
  console.log(forEach);

  /* every() */

  const every = arrayOfNumbers.every((curr) => {
    console.log(curr);
    return curr >= 5;
  });
  console.log(every);

  /* some() */

  const some = arrayOfNumbers.some((curr) => {
    console.log(curr);
    return curr >= 5;
  });
  console.log(some);

  /* reduceRight() & reduce() */

  const reduceRight = arrayOfNumbers.reduceRight(
    (accumulator, curr, index) => {
      console.log(index, accumulator, curr);
      return accumulator + curr;
    } /* initialValue */,
  );
  console.log(reduceRight);

  const reduce = arrayOfNumbers.reduce((acc, curr) => {
    console.log(acc, curr);
    return acc + curr;
  }, 0);
  console.log(reduce);

  /* reverse() & sort() & toSorted() & toReversed() */

  const reverse = arrayOfStrings.reverse();
  console.log(reverse);

  const sort = arrayOfNumbers.sort((curr, next) => {
    console.log(curr, next);
    if (curr > next) {
      return 1;
    } else if (curr < next) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(`(ascending order, same as: return a - b;) sort:`, sort);

  const toSorted = arrayOfObjects.toSorted((curr, next) => next.stars - curr.stars);
  console.log(`(descending order, same as: return b - a;) toSorted:`, toSorted);

  const toReversed = toSorted.toReversed();
  console.log(toReversed);

  /* ArrayBuffer */

  const buffer = new ArrayBuffer(16);
  const uint8Array = new Uint8Array(buffer);
  uint8Array[0] = 255;
  uint8Array[1] = 128;

  console.log(`Creating an ArrayBuffer with 16 bytes (const buffer = new ArrayBuffer(16)): \n`, buffer);
  console.log(`Creating a Uint8Array view on the buffer (const uint8Array = new Uint8Array(buffer)): \n`, uint8Array);
  console.log(`Setting values in the Uint8Array (uint8Array[0] = 255; Outputs: 255): \n`, uint8Array[0]);
  console.log(
    `Accessing values in the buffer through the Uint8Array view ( uint8Array[1] = 128; Outputs: 128): \n`,
    uint8Array[1],
  );

  /* Set */

  let setOfObj = new Set([
    { property: `size`, value: `Returns the number of values in the Set object.`, chainable: false },
    {
      method: `has(value)`,
      description: `Returns true if the value exists in the Set, otherwise false.`,
      chainable: true,
    },
    { method: `add(value)`, description: `Adds a value, returns the set itself.`, chainable: true },
    {
      method: `delete(value)`,
      description: `Removes the value, returns true if value existed at the moment of the call, otherwise false.`,
      chainable: true,
    },
    { method: `clear()`, description: `Removes all elements from the Set.`, chainable: true },
    {
      method: `forEach()`,
      description: `Good for arrays but the best for NodeList, HTMLCollection and Set - set.forEach((currentElement, index, setOfCurrentElement) => {}, this = undefined - A value passed to the function as its this value.)`,
      chainable: false,
    },
  ]);

  /* Iteration */

  setOfObj.forEach((method) => console.log(method));

  /* WeakSet */

  let weakSet = new WeakSet();

  let methods = { setMethods: true };
  let iterations = { iterations: false };

  weakSet.add(methods);
  weakSet.add(iterations);

  console.log(weakSet);
  console.log(weakSet.has(methods));
  console.log(weakSet.has(iterations));
}

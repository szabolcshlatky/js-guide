`use strict`;

export default function array() {
  /* Array */
  console.log(Array.prototype);
  let array = new Array(`Set`);

  /* ArrayBuffer */
  const buffer = new ArrayBuffer(16);
  console.log(`Creating an ArrayBuffer with 16 bytes:`, buffer);

  const uint8Array = new Uint8Array(buffer);
  console.log(`Creating a Uint8Array view on the buffer:`, uint8Array);

  uint8Array[0] = 255;
  uint8Array[1] = 128;

  console.log(`Setting values in the Uint8Array (Outputs: 255):`, uint8Array[0]);
  console.log(`Accessing values in the buffer through the Uint8Array view (Outputs: 128):`, uint8Array[1]);

  /* Set */
  console.log(Set.prototype);
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
  console.log(WeakSet.prototype);

  let weakSet = new WeakSet();

  let methods = { setMethods: true };
  let iterations = { iterations: false };

  weakSet.add(methods);
  weakSet.add(iterations);

  console.log(
    `
    => A WeakSet is a collection of objects where object references are held weakly.
    => It only accepts objects as keys, and these object references are weakly held, meaning they don't prevent garbage collection if the object is not used elsewhere.
    => It doesn't have the size property or methods to iterate over its elements, making it less versatile compared to Set.`,
    `(weakSet.add(methods), weakSet.add(iterations)):`,
    weakSet,
  );
}

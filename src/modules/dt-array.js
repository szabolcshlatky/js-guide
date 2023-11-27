`use strict`;

export default function array() {
  /* Array */
  console.log(Array.prototype);
  let array = new Array(`chessboard`, `white pieces`, `black pieces`);
  let arr = [2, 8, 32, 64];
  let mixedArray = [array, `king`, true, `king`, 2 * 1];
  let arrOfObj = [
    { name: `rook`, points: 5, officer: true },
    { name: `pawn`, points: 1, officer: false },
    { name: `knight`, points: 3, officer: true },
    { name: `pawn`, points: 1, officer: false },
    { name: `bishop`, points: 3, officer: true },
    { name: `queen`, points: 9, officer: true },
  ];

  console.log(`Array:`, array);
  console.log(`Mixed Array:`, mixedArray);
  console.log(`Array of Objects:`, arrOfObj);

  /* Getting elements & Properties */
  console.log(`Array length: (array.length)`, array.length);
  console.log(`First element (0 based language) (array[0]):`, array[0]);
  console.log(`Last element (array[array.length - 1]):`, array[array.length - 1]);

  arrOfObj[4].name = `leader`;
  console.log(`Changing an element (arrOfObj[4].name = leader):`, arrOfObj[4].name);

  /* Methods & Type Conversion */
  console.log(`Returns the index of the element (mixedArray.indexOf(king)):`, mixedArray.indexOf(`king`));
  console.log(`Returns the last index of the element (mixedArray.lastIndexOf(king)):`, mixedArray.lastIndexOf(`king`));
  console.log(`array.includes('clock') returns a boolean:`, array.includes('clock'));
  console.log(`If the element is missing (mixedArray.lastIndexOf(false)):`, mixedArray.lastIndexOf(false));
  console.log(`Makes a string out of the elements separated by ', ' (array.join(, )):`, array.join(`, `));
  console.log(
    `Adds extra elements (mixedArray.concat([{ inCheck: false, color: white, points: 0 }, { inCheck: true, color: black, points: 10 }])):`,
    mixedArray.concat([
      { inCheck: false, color: `white`, points: 0 },
      { inCheck: true, color: `black`, points: 10 },
    ]),
  );
  console.log(
    `Destructive push method, adding a new value to the end (returns the length) (arrOfObj.push({ name: 'pawn', points: 1, officer: false })):`,
    arrOfObj.push({ name: `pawn`, points: 1, officer: false }),
  );
  console.log(arrOfObj);
  console.log(
    `Destructive pop method, removes the last element (returns the popped element) (arrOfObj.pop()):`,
    arrOfObj.pop(),
  );
  console.log(arrOfObj);

  console.log(`mixedArray.toString():`, mixedArray.toString());
  console.log(`Number(arr):`, Number(arr.join(``)));
  console.log(
    `JSON.stringify
  (arrOfObj):`,
    JSON.stringify(arrOfObj),
  );

  /* Iterations */

  /* ArrayBuffer */
  const buffer = new ArrayBuffer(16);
  console.log(`Creating an ArrayBuffer with 16 bytes:`, buffer);

  const uint8Array = new Uint8Array(buffer);
  console.log(`Creating a Uint8Array view on the buffer:`, uint8Array);

  uint8Array[0] = 255;
  uint8Array[1] = 128;

  console.log(`Setting values in the Uint8Array (Outputs: 255):`, uint8Array[0]); //
  console.log(`Accessing values in the buffer through the Uint8Array view (Outputs: 128):`, uint8Array[1]); //

  /* Set */
  console.log(Set.prototype);

  /* WeakSet */
}

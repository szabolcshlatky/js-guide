`use strict`;

import _ from 'lodash';

export default function object() {
  /* Object literal */
  console.log(object.prototype);

  let literalWrapper = new Object();

  /* Iterations */

  /* Map */
  console.log(Map.prototype);

  /* Iterations */

  /* WeakMap */
  console.log(WeakMap.prototype);

  let weakMap = new WeakMap();
  let weakMapObj = {};
  weakMap.set(weakMapObj, `non-primitive value`);
  console.log(`weakMap.get(weakMapObj):`, weakMap.get(weakMapObj));

  weakMapObj = null;
  console.log(`Removed from the memory (weakMapObj = null;):`, weakMap.get(weakMapObj));

  console.log(`
    => Keys must be objects, not primitive values.
    => Keys in WeakMap are garbage collected.
    => WeakMap is not iterable.
    => WeakMap has no size property.
    => WeakMap has no clear method.
    => If we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.
  `);
}

`use strict`;

export default function async() {
  /* Asynchronous */

  /* Methods (on window object) */

  setTimeout(() => {
    console.log(`setTimeout method after 3000ms`);
  }, 3000);

  setTimeout(() => {
    console.log(`In between the Async functions`);
  }, 2000);

  let i = 0;
  const timer = setInterval(() => {
    console.log(`setInterval method in every 360000 ms`);

    i++;

    if (i === 5) {
      clearInterval(timer);
    }
  }, 1250);

  /* Callbacks */

  /* Promise */

  /* async / await */

  /* HTTP Request (XHR) */

  /* Fetch API */
}

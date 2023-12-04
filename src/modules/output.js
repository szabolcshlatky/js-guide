`use strict`;

export default function output() {
  /* Window object */

  alert(`Hello World`);
  prompt(`Alert box with text input field. Which returns with a string`);
  confirm(`Alert box text with 'OK' and 'cancel' buttons. This way returns true or false.`);
  scrollTo(0, 0);

  /* Console object */

  console.clear();
  console.log(console);
  console.log(window);
  console.log(window.outerWidth);
  console.log(outerHeight);
}

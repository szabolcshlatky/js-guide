`use strict`;

export default function output() {
  alert(`Hello World`); // Alert box
  prompt(`Alert box with text input field. Which returns with a string`);
  confirm(`Alert box text with 'OK' and 'cancel' buttons. This way returns true or false.`);
  scrollTo(0, 0); // Scrolling the window on x and y coordinates
  outerWidth; // Returns the width in pixels.

  window.console.clear();
  /* // We can leave the 'window.' part, because its the global object. */
  console.log(console);
  console.log(window);
  console.log(this); // Returns the scope where the this keyword called. Now it would return the global (= window) object.
}

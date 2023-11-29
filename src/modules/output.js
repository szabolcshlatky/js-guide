`use strict`;

export default function output() {
  alert(`Hello World`);
  prompt(`Alert box with text input field. Which returns with a string`);
  confirm(`Alert box text with 'OK' and 'cancel' buttons. This way returns true or false.`);

  console.clear();
  console.log(console);
  console.log(window);
  console.log(`window.outerWidth returns the width in pixels: ${window.outerWidth}`);
  console.log(`Because "window" is the GLOBAL object we can leave the window. part (outerHeight):`, outerHeight);
  console.log(`Scrolling the browser window (scrollTo(0, 0)):`);
  scrollTo(0, 0);
}

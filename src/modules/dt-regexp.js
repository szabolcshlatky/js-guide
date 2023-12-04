`use strict`;

export default function regexp() {
  /* Regular Expressions */

  let username = `Sable`;
  let pattern = /^[a-zA-Z0-9]{6,12}$/;

  console.log(username);
  console.log(pattern);
  console.log(pattern.test(username));
  console.log(username.match(pattern));
  console.log(username.search(pattern));
}

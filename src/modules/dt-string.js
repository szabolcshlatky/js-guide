`use strict`;

export default function string() {
  /* String */
  let firstName = 'Szabolcs';
  let lastName = 'Hlatky';
  let email = `szabolcshlatky@gmail.com`;
  let phoneNumber = 0.6703340741;

  /* Concatenation */

  let fullName = '   ' + firstName + ' ' + lastName + '   ';
  let templateLiteral = `<a href="mailto:${email} target="_blank title="Opens the email client from a new web-browser-tab">${
    fullName + "'s: " + email
  }</a>`;

  console.log(
    `let firstName = 'Szabolcs': \n`,
    firstName,
    `\n\ let lastName = "Hlatky": \n`,
    lastName,
    `\n\ let email = (backticks)szabolcshlatky@gmail.com(Alt Gr + 7): \n`,
    email,
    `\n\ let fullName = '   ' + firstName + ' ' + lastName + '   ': \n`,
    fullName,
    `\n\ let templateLiteral = <a href="mailto: {email} target="_blank title="Opens the email client from a new web-browser-tab">{fullName + "'s: " + email}</a>: \n`,
    templateLiteral,
  );

  /* Properties & Methods & Type conversion */
  console.log(
    `(JS is zero based language) firstName[0]: \n`,
    firstName[0],
    `\n\ lastName.charAt(2): \n`,
    lastName.charAt(2),
    `\n\ fullName.length: \n`,
    fullName.length,
    `\n\ templateLiteral[templateLiteral.length - 1]: \n`,
    templateLiteral[templateLiteral.length - 1],
    `\n\ firstName.toUpperCase(): \n`,
    firstName.toUpperCase(),
    `\n\ lastName.toLowerCase(): \n`,
    lastName.toLowerCase(),
    `\n\ fullName.trim(): \n`,
    fullName.trim(),
    `\n\ email.startsWith('s'): \n`,
    email.startsWith(`s`),
    `\n\ email.endsWith('hu'): \n`,
    email.endsWith(`hu`),
    `\n\ email.includes('@'): \n`,
    email.includes(`@`),
    `\n\ email.indexOf('@'): \n`,
    email.indexOf(`@`),
    `\n\ email.lastIndexOf('c'): \n`,
    email.lastIndexOf(`c`),
    `\n\ email.slice(10,13): \n`,
    email.slice(10, 13),
    `\n\ email.substr(0,4): \n`,
    email.substr(0, 4),
    `\n\ email.substring(0,4): \n`,
    email.substring(0, 4),
    `\n\ email.replaceAll('s', 'S'): \n`,
    email.replaceAll(`s`, `S`),
  );

  console.log(
    `String(true): \n`,
    String(true),
    `\n\ String(false): \n`,
    String(false),
    `\n\ String(null): \n`,
    String(null),
    `\n\ String(undefined): \n`,
    String(undefined),
    `\n\ String(NaN): \n`,
    String(NaN),
    `\n\ String(Infinity): \n`,
    String(Infinity),
    `\n\ String(-Infinity): \n`,
    String(-Infinity),
    `\n\ String(phoneNumber).replace('0.6', '+36').concat( email): \n`,
    String(phoneNumber).replace(`0.6`, `+36`).concat(` ${email}`),
  );

  /* Iteration */

  for (const char of `for...of loop `) {
    console.log(`char (is a variable for the actual element or character from the iteration) = ${char} `);
  }
}

`use strict`;

export default function string() {
  /* String */
  console.log(String.prototype);
  let firstName = 'Szabolcs';
  let lastName = new String('Hlatky');
  let email = `szabolcshlatky@gmail.com`;
  let phoneNumber = 0.6703340741;

  console.log(`
    firstName = ${firstName};
    lastName = ${lastName};
    email = ${email};
    phoneNumber = ${phoneNumber};
  `);

  /* Concatenation */
  let fullName = '   ' + firstName + ' ' + lastName + '   ';
  let templateLiteral = `<a href="mailto:${email} target="_blank title="Opens the email client from a new web-browser-tab">${
    fullName + "'s: " + email
  }</a>`;

  console.log(fullName, templateLiteral);

  console.log(`
    fullName = ${fullName};
    templateLiteral = ${templateLiteral};
  `);

  /* Properties & Methods & Type conversion */
  console.log(`
    firstName[0] = ${firstName[0]};
    lastName.charAt(2) = ${lastName.charAt(2)};
    fullName.length = ${fullName.length};
    templateLiteral[templateLiteral.length - 1] = ${templateLiteral[templateLiteral.length - 1]};
    \n\
    firstName.toUpperCase() = ${firstName.toUpperCase()};
    lastName.toLowerCase() = ${lastName.toLowerCase()};
    fullName.trim() = ${fullName.trim()};
    email.startsWith('s') = ${email.startsWith(`s`)};
    email.endsWith('hu') = ${email.endsWith(`hu`)};
    email.includes('@') = ${email.includes(`@`)};
    email.indexOf('@') = ${email.indexOf(`@`)};
    email.lastIndexOf('c') = ${email.lastIndexOf(`c`)};
    email.slice(10,13) = ${email.slice(10, 13)};
    email.substr(0,4) = ${email.substr(0, 4)};
    email.substring(0,4) = ${email.substring(0, 4)};
    email.replaceAll('s', 'S') = ${email.replaceAll(`s`, `S`)};
    \n\
    String(true) = ${String(true)};
    String(false) = ${String(false)};
    String(null) = ${String(null)};
    String(undefined) = ${String(undefined)};
    String(NaN) = ${String(NaN)};
    String(Infinity) = ${String(Infinity)};
    String(-Infinity) = ${String(-Infinity)};
    String(phoneNumber).replace('0.6', '+36').concat( email) = ${String(phoneNumber)
      .replace(`0.6`, `+36`)
      .concat(` ${email}`)};
  `);

  /* Iteration */

  for (const char of `for...of loop `) {
    console.log(`char (is a variable for the actual element or character from the iteration) = ${char} `);
  }
}

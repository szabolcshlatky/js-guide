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

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(fullName);
  console.log(templateLiteral);

  /* Properties & Methods & Type conversion */

  console.log(firstName[0]);
  console.log(lastName.charAt(2));
  console.log(fullName.length);
  console.log(templateLiteral[templateLiteral.length - 1]);
  console.log(firstName.toUpperCase());
  console.log(lastName.toLowerCase());
  console.log(fullName.trim());
  console.log(email.startsWith(`s`));
  console.log(email.endsWith(`hu`));
  console.log(email.includes(`@`));
  console.log(email.indexOf(`@`));
  console.log(email.lastIndexOf(`c`));
  console.log(email.slice(10, 13));
  console.log(email.substr(0, 4));
  console.log(email.substring(0, 4));
  console.log(email.replaceAll(`s`, `S`));

  console.log(String(true));
  console.log(String(false));
  console.log(String(null));
  console.log(String(undefined));
  console.log(String(NaN));
  console.log(String(Infinity));
  console.log(String(-Infinity));
  console.log(String(phoneNumber).replace(`0.6`, `+36`).concat(` ${email}`));

  /* Iteration */

  for (const char of `for...of loop`) {
    console.log(char);
  }
}

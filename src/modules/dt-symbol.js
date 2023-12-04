`use strict`;

export default function symbol() {
  /* Symbol */

  let nick, nickname;
  nick = nickname = Symbol(`©貂`);
  let name = Symbol(`©貂`);

  console.log(nick);
  console.log(nickname);
  console.log(name);
  console.log(nick == nickname);
  console.log(nick === nickname);
  console.log(nick != name);
  console.log(nick !== name);
}

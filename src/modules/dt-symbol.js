`use strict`;

export default function symbol() {
  /* Symbol */
  let nick, nickname;
  nick = nickname = Symbol(`©貂`);
  let name = Symbol(`©貂`);

  console.log(
    `let nick, nickname = Symbol(©貂):
    nick = nickname = Symbol(©貂): \n`,
    nick,
    nickname,
    `\n\ let name = Symbol(©貂): \n`,
    name,
    `\n\ With variable chaining (nick == nickname): \n`,
    nick == nickname,
    `\n\ With variable chaining (nick === nickname): \n`,
    nick === nickname,
    `\n\ Without variable chaining (nick != name): \n`,
    nick != name,
    `\n\ Without variable chaining (nick !== name): \n`,
    nick !== name,
  );
}

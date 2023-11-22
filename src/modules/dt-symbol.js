export default function symbol() {
  console.log(Symbol.prototype);
  let nick, nickname;
  nick = nickname = Symbol(`©貂`);
  let name = Symbol(`©貂`);

  console.log(nick, nickname, name);

  console.log(`With variable chaining (nick == nickname) =`, nick == nickname);
  console.log(`With variable chaining (nick === nickname) =`, nick === nickname);
  console.log(`Without variable chaining (nick != name) =`, nick != name);
  console.log(`Without variable chaining (nick !== name) =`, nick !== name);
}

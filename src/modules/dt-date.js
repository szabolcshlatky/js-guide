`use strict`;

export default function date() {
  /* Date object */

  const now = new Date();
  console.log(now);

  /* Methods */

  console.log(now.getFullYear());
  console.log(now.getMonth());
  console.log(now.getDate());
  console.log(now.getDay());
  console.log(now.getHours());
  console.log(now.getMinutes());
  console.log(now.getSeconds());
  console.log(now.toDateString());
  console.log(now.toTimeString());
  console.log(now.toLocaleString());

  /* Timestamps */

  const before = new Date(`October 30 1993 07:30:59`);
  const diff = now.getTime() - before.getTime();
  const mins = Math.round(diff / 1000 / 60);
  const hours = Math.round(mins / 60);
  const days = Math.round(hours / 24);

  console.log(new Date(1675938474990));
  console.log(now.getTime());
  console.log(before.getTime);
  console.log(diff);
  console.log(mins);
  console.log(hours);
  console.log(days);

  /* Date-fns library */

  console.log(dateFns.isToday(now));
  console.log(dateFns.format(now, `YYYY`));
  console.log(dateFns.format(now, `MMMM`));
  console.log(dateFns.format(now, `MMM`));
  console.log(dateFns.format(now, `dddd`));
  console.log(dateFns.format(now, `Do`));
  console.log(dateFns.format(now, `dddd Do MMMM YYYY`));
  console.log(dateFns.distanceInWords(before, now));
  console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
}

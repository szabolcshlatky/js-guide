export default function date() {
  /* Date object */
  console.log(Date.prototype);

  const now = new Date();
  console.log(
    `Created a date object with constructor keyword 'new'. new Date(); returns the current date and time:`,
    now,
  );

  /* Methods */
  console.log(`getFullYear returns the year as number from the Date object's methods:`, now.getFullYear());

  console.log(
    `getMonth returns the month as number, but january would be 0 and etc. because of the 0 based language:`,
    now.getMonth(),
  );
  console.log(`getDate returns the day as number:`, now.getDate());
  console.log(`getDay returns the number of the day in the week:`, now.getDay());
  console.log(`getHours returns the hour of the day as a number:`, now.getHours());
  console.log(`getMinutes returns the actual minute as a number:`, now.getMinutes());
  console.log(`getSeconds returns the second as a number:`, now.getSeconds());
  console.log(`toDateString returns a shorten date as a string:`, now.toDateString());
  console.log(`toTimeString returns a shorten time as a string:`, now.toTimeString());
  console.log(`toLocaleString returns a shorten the date / time as a string:`, now.toLocaleString());

  /* Timestamps */
  console.log(`new Date(1675938474990) convert the number (as milliseconds) into date:`, new Date(1675938474990));

  const before = new Date(`October 30 1993 07:30:59`);

  console.log(`getTime returns a big number as milliseconds since 1970 january:`, now.getTime());
  console.log(
    `As property we get [native code] or [object Object] (Objects should be converted to string well...):`,
    before.getTime,
  );

  const diff = now.getTime() - before.getTime();
  const mins = Math.round(diff / 1000 / 60);
  const hours = Math.round(mins / 60);
  const days = Math.round(hours / 24);

  console.log(
    `
      now.getTime() - before.getTime() is the difference between the two dates in milliseconds (diff) = ${diff}
      \n\
      mins = Math.round(diff / 1000 / 60) = ${mins}
      hours = Math.round(mins / 60) = ${hours}
      days = Math.round(hours / 24) = ${days}
    `,
  );

  /* Date-fns library */
  console.log(
    `dateFns.isToday(now) returns boolean. If I would put millisecond numbers in the () at the declaration of now, it would be false:`,
    dateFns.isToday(now),
  );
  console.log(
    `dateFns.format(now, 'YYYY') to the second string: https://date-fns.org/v2.29.2/docs/format:`,
    dateFns.format(now, `YYYY`),
  );
  console.log(`dateFns.format(now, 'MMMM') returns long month name:`, dateFns.format(now, `MMMM`));
  console.log(`dateFns.format(now, 'MMM') returns shorten month name:`, dateFns.format(now, `MMM`));
  console.log(`dateFns.format(now, 'dddd') returns long day name:`, dateFns.format(now, `dddd`));
  console.log(`dateFns.format(now, 'Do') returns ..th day:`, dateFns.format(now, `Do`));
  console.log(
    `dateFns.format(now, 'dddd Do MMMM YYYY') returns chained date:`,
    dateFns.format(now, `dddd Do MMMM YYYY`),
  );
  console.log(`dateFns.distanceInWords(before, now) returns the passed time:`, dateFns.distanceInWords(before, now));
  console.log(
    `dateFns.distanceInWords(now, before, { addSuffix: true }) returns the passed time with suffix (like 'ago'):`,
    dateFns.distanceInWords(now, before, { addSuffix: true }),
  );
}

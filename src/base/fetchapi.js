`use strict`;

/* async / await & Fetch API */

const fetchData = async (url, respObj) => {
  const response = await fetch(url, respObj);

  response.headers.get(`Content-Type`);
  for (let [key, value] of response.headers) {
    console.log(`${key} = ${value}`);
  }

  try {
    if (response.status !== 200) {
      throw new Error(`Cannot fetch the data`);
    } else {
      const data = await response.json();
      console.log(`Resolved`);
      return data;
    }
  } catch (error) {
    throw new Error(`The error.message property`);
  }
};

export default fetchData;

// fetchData(`https://jsonplaceholder.typicode.com/todos/`, {
//   method: `GET`,
//   headers: {
//     'Content-Type': `application/json`,
//   },
//   body: JSON.stringify(),
// })
//   .then((data) => {
//     console.log(data);
//     /* Work with the 'data' here */
//     return data;
//   })
//   .catch((error) => console.log(`rejected: \n`, error.message))
//   .finally(() => console.log(`finally: \n`, fetchData));

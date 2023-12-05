`use strict`;

export default function async() {
  /* Asynchronous */

  /* Event loop & Callback hell */

  const callbackHell = () => {
    function firstFunction(callback) {
      let i = 0;
      const timer = setInterval(() => {
        console.log('First function running...');
        i++;
        if (i === 3) {
          clearInterval(timer);
          callback();
        }
      }, 1000);
    }

    function secondFunction(callback) {
      let i = 0;
      const timer = setInterval(() => {
        console.log('Second function running...');
        i++;
        if (i === 3) {
          clearInterval(timer);
          callback();
        }
      }, 1000);
    }

    function thirdFunction() {
      setTimeout(() => {
        console.log('Third function running...');
      }, 2000);
    }

    firstFunction(() => {
      secondFunction(() => {
        thirdFunction();
      });
    });
  };

  callbackHell();

  /* Promise & HTTP Request (XHR) */

  const getXHRPromiseTodos = (URL) => {
    console.log(`promise started`);

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener(`readystatechange`, () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4) {
          reject(`Error getting resource`);
        } else {
          console.log(request, request.readyState);
        }
      });

      request.responseType = 'text';

      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
          console.log('Request completed successfully');
          console.log('Response headers: ', request.getAllResponseHeaders());
        } else {
          reject(`Error getting resource`);
        }
      };

      request.onerror = () => {
        console.log('Request failed');
        reject('Network error');
      };

      request.onprogress = (event) => {
        if (event.lengthComputable) {
          console.log(`Received ${event.loaded} of ${event.total}`);
        }
      };

      request.open(`GET`, URL, true);
      request.setRequestHeader('Content-Type', 'application/json');

      request.send();

      setTimeout(() => {
        request.abort();
        console.log('Request aborted');
      }, 5000);
    });
  };

  getXHRPromiseTodos(`https://jsonplaceholder.typicode.com/todos/`)
    .then((data) => {
      console.log(`XHR promise resolved: \n`, data);
      // Work with the 'data' here
      return data;
    })
    .catch((error) => {
      console.log(`XHR promise rejected: \n`, error);
    })
    .finally(() => {
      console.log(`XHR promise finally \n`, getXHRPromiseTodos);
    });

  /* async / await & Fetch API */

  const fetchData = async (url) => {
    const response = await fetch(url, {
      method: `GET`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(),
    });

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

  fetchData(`https://jsonplaceholder.typicode.com/todos/`)
    .then((data) => {
      console.log(data);
      /* Work with the 'data' here */
      return data;
    })
    .catch((error) => console.log(`rejected: \n`, error.message))
    .finally(() => console.log(`finally: \n`, fetchData));

  /* DT URL */

  const base = `https://google.com/search`;
  let url = new URL(`?q=javascript`, base);
  console.log(url);

  /* Properties & Methods */

  console.log(url.href);
  console.log(url.origin);
  console.log(url.protocol);
  console.log(url.host);
  console.log(url.hostname);
  console.log(url.port);
  console.log(url.pathname);
  console.log(url.search);
  console.log(url.searchParams);

  console.log(url.toString());
  console.log(url.toJSON());
  console.log(url.valueOf());
  console.log(url.searchParams.append(`query`, `value`));
  console.log(url.searchParams.delete(`query`));
  console.log(url.searchParams.get(`query`));
  console.log(url.searchParams.getAll(`q`));
  console.log(url.searchParams.has(`q`));
  console.log(url.searchParams.set(`query`, `value`));
  console.log(url.searchParams.sort());
}

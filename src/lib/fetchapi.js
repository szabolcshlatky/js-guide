`use strict`;

export default class FetchApi {
  #deletedItems;

  constructor(url) {
    this.url = url;
    this.data = null;
    this.#deletedItems = [];
  }

  async get() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  }

  async post(data) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  }

  async put(id, data) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  }

  async patch(id, data) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'sec-fetch-mode': 'cors',
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  }

  async delete(id) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        this.#deletedItems.push(id);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.ok;
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  }

  emptyDeletedItems() {
    this.#deletedItems = [];
  }

  async head() {
    try {
      const response = await fetch(this.url, {
        method: 'HEAD',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.ok;
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  }

  async options() {
    try {
      const response = await fetch(this.url, {
        method: 'OPTIONS',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  }
}

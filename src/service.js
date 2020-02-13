const myHeaders = new Headers({
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
});

export default class Service {
  static getCategories() {
    return fetch("https://sv443.net/jokeapi/categories", {
      "method": "GET",
      "headers": myHeaders,
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  static getJoke(category) {
    return fetch(`https://sv443.net/jokeapi/v2/joke/${category}?type=single`, {
      "method": "GET",
      "headers": myHeaders,
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log('err', err);
      });
  }
};
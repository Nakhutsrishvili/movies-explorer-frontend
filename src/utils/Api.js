class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

export default Api;

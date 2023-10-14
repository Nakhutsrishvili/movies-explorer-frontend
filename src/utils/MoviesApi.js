import { MOVIESURL } from "./config";
import Api from "./Api";

class MoviesApi extends Api {
  constructor({ baseUrl }) {
    super({ baseUrl });
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: "GET",
    }).then(super._checkResult);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIESURL,
});

export default moviesApi;

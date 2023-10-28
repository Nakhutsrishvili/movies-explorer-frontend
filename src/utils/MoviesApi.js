import { BASE_URL_MOVIES, PATH } from './constants';
import { isOk } from './utils';

const getMovies = async () => {
  const res = await fetch(`${BASE_URL_MOVIES}${PATH.BEATFILM}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await isOk(res);
  return data;
};

export { getMovies };

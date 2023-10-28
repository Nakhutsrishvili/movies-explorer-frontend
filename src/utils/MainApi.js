import { BASE_URL, PATH } from './constants';
import { isOk } from './utils';

const getMovies = async () => {
  const res = await fetch(`${BASE_URL}${PATH.MOVIES}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.jwt}`,
    },
  });
  const data = await isOk(res);
  return data;
};

const register = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}${PATH.REGISTRATION}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await isOk(res);
  return data;
};

const authorize = async (email, password) => {
  const res = await fetch(`${BASE_URL}${PATH.LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await isOk(res);
  return data;
};

const checkToken = async () => {
  const res = await fetch(`${BASE_URL}${PATH.USER_INFO}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.jwt}`,
    },
  });
  const data = await isOk(res);
  return data;
};

const setUserInfo = async (name, email) => {
  const res = await fetch(`${BASE_URL}${PATH.USER_INFO}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify({ name, email }),
  });
  const data = await isOk(res);
  return data;
};

const addMovies = async (movie) => {
  const res = await fetch(`${BASE_URL}${PATH.MOVIES}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify(movie),
  });
  const data = await isOk(res);
  return data;
};

const deleteMovies = async (id) => {
  const res = await fetch(`${BASE_URL}${PATH.MOVIES}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.jwt}`,
    },
  });
  const data = await isOk(res);
  return data;
};

export {
  register,
  authorize,
  addMovies,
  checkToken,
  getMovies,
  deleteMovies,
  setUserInfo,
};

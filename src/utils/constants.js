//const BASE_URL = 'http://localhost:3005';
const BASE_URL = "https://api.nodari-diploma.nomoredomainsicu.ru";
const BASE_URL_MOVIES = "https://api.nomoreparties.co";
const PATH = {
  MAIN: "/",
  MOVIES: "/movies",
  SAVED: "/saved-movies",
  PROFILE: "/profile",
  LOGIN: "/signin",
  REGISTRATION: "/signup",
  OTHER: "/*",
  USER_INFO: "/users/me",
  BEATFILM: "/beatfilm-movies",
};

const MESSAGE = {
  LOGIN_ER: "Ошибкак при авторизации",
  REGISTRATION_ER: "Ошибкак при регистрации",
  REGISTER_OK: "Вы успешно зарегистрировались!",
  REGISTER_ER: "Что-то пошло не так! Попробуйте ещё раз.",
  ERROR: "Ошибка сервера",
  EMPTY_STRIHG: "Необходимо ввести ключевое слово",
  NO_MOVIES: "Ничего не найдено",
  PROFILE_ER: "При обновлении профиля произошла ошибка.",
  PROFILE_OK: "Данные профиля изменены.",
  EMAIL_ER: "Введен непраивльный формат email",
  NAME_ER: "Имя содержит только латиницу, кириллицу, пробел или дефис.",
};

const DEVICE = {
  desctop: { device: "desctop", width: 1280, maxMovies: 12, moreMovies: 3 },
  tablet: { device: "tablet", width: 768, maxMovies: 8, moreMovies: 2 },
  mobile: { device: "mobile", width: 320, maxMovies: 5, moreMovies: 2 },
};

const SHORT_DURATION = 40;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const NAME_REGEX = /^[a-zA-Zа-яА-Я\s-]+$/;
export {
  BASE_URL,
  PATH,
  MESSAGE,
  BASE_URL_MOVIES,
  SHORT_DURATION,
  DEVICE,
  EMAIL_REGEX,
  NAME_REGEX,
};

import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ProtectedHomeElement from '../ProtectedHomeElement/ProtectedHomeElement';
import { useCallback, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { MESSAGE, PATH } from '../../utils/constants';
import * as mainApi from '../../utils/MainApi';
import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SendContext from '../../contexts/SendContext';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    Boolean(localStorage.isLoggedIn) ?? false
  );
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [savedMovies, setSavedMovies] = useState([]);
  const [messageError, setMessageError] = useState('');
  const [isFormActive, setFormActive] = useState(false);
  const { pathname } = useLocation();
  const isOpen = isSuccessful || isError;

  const closeAllPopups = useCallback(() => {
    setIsSuccessful(false);
    setIsError(false);
  }, []);

  useEffect(() => {
    function closePopupsByEsc(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closePopupsByEsc);
      return () => {
        document.removeEventListener('keydown', closePopupsByEsc);
      };
    }
  }, [isOpen, closeAllPopups]);

  const handleRegister = async (name, email, password) => {
    setIsSend(true);
    try {
      await mainApi.register(name, email, password);
      setIsSuccessful(true);
      handleLogin(email, password);
    } catch (err) {
      setIsError(true);
      console.error(`${MESSAGE.REGISTRATION_ER} ${err}`);
    } finally {
      setIsSend(false);
    }
  };

  const handleLogin = async (email, password) => {
    setIsSend(true);
    try {
      const res = await mainApi.authorize(email, password);
      localStorage.jwt = res.token;
      setLoggedIn(true);
      navigate(PATH.MOVIES, { replace: true });
      checkToken(res.token);
    } catch (err) {
      setIsError(true);
      console.error(`${MESSAGE.LOGIN_ER} ${err}`);
    } finally {
      setIsSend(false);
    }
  };

  const checkToken = async () => {
    const jwt = localStorage.jwt;
    if (jwt) {
      try {
        const res = await mainApi.checkToken(jwt);
        if (res) {
          setCurrentUser({ forename: res.name, email: res.email });
          localStorage.isLoggedIn = true;
        }
        const data = await mainApi.getMovies();
        setSavedMovies(data);
        if (data.length !== 0) {
          localStorage.savedMovies = JSON.stringify(data);
        }
      } catch (err) {
        setIsError(true);
        console.error(`${MESSAGE.LOGIN_ER} ${err}`);
        handleSignout();
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const handleSignout = () => {
    setLoggedIn(false);
    navigate(PATH.MAIN, { replace: true });
    localStorage.clear();
    setCurrentUser({});
  };

  const handleSaveMovies = async (card, isLike) => {
    if (!isLike) {
      try {
        const res = await mainApi.addMovies(card);
        setSavedMovies([...savedMovies, res]);
        localStorage.savedMovies = JSON.stringify([...savedMovies, res] ?? []);
      } catch (err) {
        setIsError(true);
        console.error(`${MESSAGE.ERROR} ${err}`);
      }
    } else {
      try {
        const id = savedMovies.find(
          (item) => item.movieId === card.movieId
        )._id;
        await mainApi.deleteMovies(id);
        setSavedMovies((movies) => movies.filter((item) => item._id !== id));
        localStorage.savedMovies = JSON.stringify(
          savedMovies.filter((item) => item._id !== id) ?? []
        );
      } catch (err) {
        setIsError(true);
        console.error(`${MESSAGE.ERROR} ${err}`);
      }
    }
  };

  const handleDeleteMovies = async (card) => {
    setIsSend(true);
    try {
      await mainApi.deleteMovies(card._id);
      setSavedMovies((movies) =>
        movies.filter((item) => item._id !== card._id)
      );
      localStorage.savedMovies = JSON.stringify(
        savedMovies.filter((item) => item._id !== card._id) ?? []
      );
    } catch (err) {
      setIsError(true);
      console.error(`${MESSAGE.ERROR} ${err}`);
    }
  };

  const handlsChangeProfile = async (values) => {
    setMessageError('');
    setIsSend(true);
    try {
      const res = await mainApi.setUserInfo(values.forename, values.email);
      setCurrentUser({ forename: res.name, email: res.email });
      setFormActive(false);
      setIsSuccessful(true);
    } catch (err) {
      setMessageError(MESSAGE.PROFILE_ER);
      console.error(`${MESSAGE.ERROR} ${err}`);
    } finally {
      setIsSend(false);
    }
  };

    useEffect(() => {
    setMessageError('');
    setFormActive(false);
  }, [pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page__container'>
        <SendContext.Provider value={isSend}>
          <SavedMoviesContext.Provider value={savedMovies}>
            <Routes>
              <Route
                path={PATH.MAIN}
                element={<ProtectedHomeElement isLoggedIn={isLoggedIn} />}
              />
              <Route
                path={PATH.MOVIES}
                element={
                  <ProtectedRoute
                    element={ProtectedHomeElement}
                    isLoggedIn={isLoggedIn}
                    handleSaveMovies={handleSaveMovies}
                  />
                }
              />
              <Route
                path={PATH.SAVED}
                element={
                  <ProtectedRoute
                    element={ProtectedHomeElement}
                    isLoggedIn={isLoggedIn}
                    handleDeleteMovies={handleDeleteMovies}
                  />
                }
              />
              <Route
                path={PATH.PROFILE}
                element={
                  <ProtectedRoute
                    element={ProtectedHomeElement}
                    isLoggedIn={isLoggedIn}
                    handleSignout={handleSignout}
                    handlsChangeProfile={handlsChangeProfile}
                    isFormActive={isFormActive}
                    setFormActive={setFormActive}
                    messageError={messageError}
                  />
                }
              />
              <Route
                path={PATH.REGISTRATION}
                element={
                  <ProtectedHomeElement
                    isLoggedIn={isLoggedIn}
                    handleRegister={handleRegister}
                  />
                }
              />
              <Route
                path={PATH.LOGIN}
                element={
                  <ProtectedHomeElement
                    isLoggedIn={isLoggedIn}
                    handleLogin={handleLogin}
                  />
                }
              />
              <Route path={PATH.OTHER} element={<NotFoundPage />} />
            </Routes>
          </SavedMoviesContext.Provider>
        </SendContext.Provider>
      </div>
      <InfoTooltip
        name='successful'
        titleText={
          pathname === PATH.PROFILE ? MESSAGE.PROFILE_OK : MESSAGE.REGISTER_OK
        }
        isOpen={isSuccessful}
        onClose={closeAllPopups}
      />

      <InfoTooltip
        name='error'
        titleText={MESSAGE.REGISTER_ER}
        isOpen={isError}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
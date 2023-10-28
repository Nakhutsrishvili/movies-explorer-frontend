import './Main.css';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import { useLocation } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

const Main = ({
  isLoading,
  handleLogin,
  handleRegister,
  handleSignout,
  children,
  allMovies,
  savedMovies,
  handleSaveMovies,
  handleDeleteMovies,
  handlsChangeProfile,
  isFormActive,
  setFormActive,
  messageError,
}) => {
  const { pathname } = useLocation();
  return (
    <main className='main'>
      {
        {
          '/': <Landing isLoading={isLoading} />,
          '/movies': (
            <Movies
              allMovies={allMovies}
              handleSaveMovies={handleSaveMovies}
              savedMovies={savedMovies}
            />
          ),
          '/saved-movies': (
            <SavedMovies
              handleDeleteMovies={handleDeleteMovies}
              savedMovies={savedMovies}
            />
          ),
          '/profile': (
            <Profile
              handleSignout={handleSignout}
              handlsChangeProfile={handlsChangeProfile}
              isFormActive={isFormActive}
              setFormActive={setFormActive}
              messageError={messageError}
            />
          ),
          '/signup': <Register handleRegister={handleRegister} />,
          '/signin': <Login handleLogin={handleLogin} />,
        }[pathname]
      }
      {children}
    </main>
  );
};

export default Main;

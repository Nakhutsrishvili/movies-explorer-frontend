import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

export default function ProtectedElement({ ...props }) {
  const { pathname } = useLocation();
  return (
    <>
      <Header {...props} />
      <Main {...props} />
      {pathname !== '/profile' &&
        pathname !== '/signin' &&
        pathname !== '/signup' &&
        pathname !== '/*' && <Footer {...props} />}
    </>
  );
}

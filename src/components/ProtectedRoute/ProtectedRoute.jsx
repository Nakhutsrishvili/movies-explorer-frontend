import { Navigate } from 'react-router-dom';
import { PATH } from '../../utils/constants';

export default function ProtectedRoute({
  element: ProtectedHomeElement,
  isLoggedIn,
  ...props
}) {
  return isLoggedIn ? (
    <ProtectedHomeElement isLoggedIn={isLoggedIn} {...props} />
  ) : (
    <Navigate to={PATH.MAIN} replace />
  );
}

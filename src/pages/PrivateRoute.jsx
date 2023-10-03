import { Navigate, Outlet, useContext } from 'react-router-dom';
const PrivateRoutes = () => {
  const location = useLocation();
  const { authLogin } = useContext(globalC);

  if (authLogin === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return authLogin 
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}
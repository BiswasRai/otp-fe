import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getItemFromLocalStorage } from "../utils/localStorage";

const PrivateRoute = () => {
  const location = useLocation();
  const isAuthenticated = getItemFromLocalStorage("isAuthenticated");

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ path: location.pathname }} />
  );
};

export default PrivateRoute;

import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return !!user;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  console.log("passed through protected routes");
  console.log(location)
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
};

export default ProtectedRoutes;
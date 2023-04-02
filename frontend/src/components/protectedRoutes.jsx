import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "../Axios/axios";

const useAuth = () => {
  const { token } = useContext(UserContext);
  return !!token
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
};

export default ProtectedRoutes;
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoutes = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export { PrivateRoutes };
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { paths } from "../../../router/routerPaths";

const AuthComponent = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to={paths.loginPath} />;
};

export default AuthComponent;

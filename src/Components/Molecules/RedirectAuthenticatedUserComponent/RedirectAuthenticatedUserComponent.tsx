import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { paths } from "../../../router/routerPaths";

const RedirectAuthenticatedUserComponent = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Navigate to={paths.userDashboardRouterPath} />
  ) : (
    <Outlet />
  );
};

export default RedirectAuthenticatedUserComponent;

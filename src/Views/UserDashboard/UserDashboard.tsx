import { Link } from "react-router-dom";
import { legoSetRouterNavigationPath } from "../../router/routerPaths";
const UserDashboard = () => {
  return (
    <>
      <div>Dashboard</div>;
      <Link to={legoSetRouterNavigationPath("Set_7722_V1")}>7722Set</Link>
    </>
  );
};

export default UserDashboard;

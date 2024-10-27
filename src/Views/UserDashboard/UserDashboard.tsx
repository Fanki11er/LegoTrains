//import { Link } from "react-router-dom";

import UserDashboardTopNavigation from "../../Components/Molecules/UserDashboardTopNavigation/UserDashboardTopNavigation";
import { UserDashboardWrapper } from "./UserDashboard.styles";

//import { legoSetRouterNavigationPath } from "../../router/routerPaths";
const UserDashboard = () => {
  return (
    <UserDashboardWrapper>
      <UserDashboardTopNavigation />
    </UserDashboardWrapper>
  );
};

export default UserDashboard;
{
  /* <>
<div>Dashboard</div>;
<Link to={legoSetRouterNavigationPath("Set_7722_V1")}>7722Set</Link>
</> */
}

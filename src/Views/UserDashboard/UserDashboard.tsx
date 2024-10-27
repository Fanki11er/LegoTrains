//import { Link } from "react-router-dom";

import AnonymousAccountWarning from "../../Components/Molecules/AnonymousAccountWarning/AnonymousAccountWarning";
import UserDashboardTopNavigation from "../../Components/Molecules/UserDashboardTopNavigation/UserDashboardTopNavigation";
import useAuth from "../../Hooks/useAuth";
import { UserDashboardWrapper } from "./UserDashboard.styles";

//import { legoSetRouterNavigationPath } from "../../router/routerPaths";
const UserDashboard = () => {
  const { currentUser } = useAuth();
  const isAnonymous = currentUser?.isAnonymous;

  return (
    <UserDashboardWrapper>
      <UserDashboardTopNavigation />
      {currentUser && isAnonymous && <AnonymousAccountWarning />}
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

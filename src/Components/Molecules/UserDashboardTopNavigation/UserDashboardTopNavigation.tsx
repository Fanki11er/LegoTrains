import useAuth from "../../../Hooks/useAuth";
import Logo from "../Logo/Logo";
import Logout from "../Logout/Logout";
import {
  UserDashboardTopNavigationElementContainer,
  UserDashboardTopNavigationUserInfo,
  UserDashboardTopNavigationWrapper,
} from "./UserDashboardTopNavigation.styles";

const UserDashboardTopNavigation = () => {
  const { currentUser } = useAuth();
  const isAnonymous = currentUser?.isAnonymous;

  return (
    <UserDashboardTopNavigationWrapper>
      <UserDashboardTopNavigationElementContainer>
        <Logo />
        <h2>Dashboard</h2>
      </UserDashboardTopNavigationElementContainer>
      <UserDashboardTopNavigationElementContainer>
        <UserDashboardTopNavigationUserInfo>
          {isAnonymous ? "Anonymous" : currentUser?.displayName}
        </UserDashboardTopNavigationUserInfo>
        <Logout />
      </UserDashboardTopNavigationElementContainer>
    </UserDashboardTopNavigationWrapper>
  );
};

export default UserDashboardTopNavigation;

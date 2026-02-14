import useAuth from "../../../Hooks/useAuth";
import { GradientTextWrapper } from "../../Atoms/GradientTextWrapper/GradientTextWrapper.styles";
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
      </UserDashboardTopNavigationElementContainer>
      <UserDashboardTopNavigationElementContainer>
        <UserDashboardTopNavigationUserInfo>
          <GradientTextWrapper>
            <span>{isAnonymous ? "Anonymous" : currentUser?.displayName}</span>
          </GradientTextWrapper>
        </UserDashboardTopNavigationUserInfo>
        <Logout />
      </UserDashboardTopNavigationElementContainer>
    </UserDashboardTopNavigationWrapper>
  );
};

export default UserDashboardTopNavigation;

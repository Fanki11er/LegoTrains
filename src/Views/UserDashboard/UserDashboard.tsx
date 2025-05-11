import AnonymousAccountWarning from "../../Components/Molecules/AnonymousAccountWarning/AnonymousAccountWarning";
import { AnonymousAccountWarningPlaceholder } from "../../Components/Molecules/AnonymousAccountWarning/AnonymousAccountWarning.styles";
import Footer from "../../Components/Molecules/Footer/Footer";
import UserDashboardTopNavigation from "../../Components/Molecules/UserDashboardTopNavigation/UserDashboardTopNavigation";
import UserSetsList from "../../Components/Organisms/UserSetsList/UserSetsList";
import useAuth from "../../Hooks/useAuth";
import { UserDashboardWrapper } from "./UserDashboard.styles";

const UserDashboard = () => {
  const { currentUser } = useAuth();
  const isAnonymous = currentUser?.isAnonymous;

  return (
    <UserDashboardWrapper>
      <UserDashboardTopNavigation />
      {currentUser && isAnonymous ? (
        <AnonymousAccountWarning />
      ) : (
        <AnonymousAccountWarningPlaceholder />
      )}
      <UserSetsList />
      <Footer />
    </UserDashboardWrapper>
  );
};

export default UserDashboard;

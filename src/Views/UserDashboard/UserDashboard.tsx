import Footer from "../../Components/Molecules/Footer/Footer";
import UserDashboardTopNavigation from "../../Components/Molecules/UserDashboardTopNavigation/UserDashboardTopNavigation";
import UserSetsList from "../../Components/Organisms/UserSetsList/UserSetsList";
import { UserDashboardWrapper } from "./UserDashboard.styles";
import useTrackPageView from "../../Hooks/useTrackPageView";
import AnonymousAccountWarning from "../../Components/Molecules/AnonymousAccountWarning/AnonymousAccountWarning";
import WorseExperienceWarning from "../../Components/Molecules/WorseExperienceWarning/WorseExperienceWarning";

const UserDashboard = () => {
  useTrackPageView("User Dashboard");

  return (
    <UserDashboardWrapper>
      <UserDashboardTopNavigation />
      <AnonymousAccountWarning />
      <WorseExperienceWarning />
      <UserSetsList />
      <Footer />
    </UserDashboardWrapper>
  );
};

export default UserDashboard;

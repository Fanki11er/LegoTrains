import AccountRegistrationForm from "../../Components/Molecules/AccountRegistrationForm/AccountRegistrationForm";
import AccountViewTemplate from "../../Components/Organisms/AccountViewTemplate/AccountViewTemplate";
import useTrackPageView from "../../Hooks/useTrackPageView";

const AccountRegistrationView = () => {
  useTrackPageView("User Registration");

  return (
    <AccountViewTemplate>
      <AccountRegistrationForm />
    </AccountViewTemplate>
  );
};
//Todo if logged in move to dashboard
export default AccountRegistrationView;

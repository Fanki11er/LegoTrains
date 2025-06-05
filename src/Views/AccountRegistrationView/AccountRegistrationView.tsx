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

export default AccountRegistrationView;

import AccountLoginForm from "../../Components/Molecules/AccountLoginForm/AccountLoginForm";
import AccountViewTemplate from "../../Components/Organisms/AccountViewTemplate/AccountViewTemplate";
import useTrackPageView from "../../Hooks/useTrackPageView";

const AccountLoginFormView = () => {
  useTrackPageView("User Login View");

  return (
    <AccountViewTemplate>
      <AccountLoginForm />
    </AccountViewTemplate>
  );
};

export default AccountLoginFormView;

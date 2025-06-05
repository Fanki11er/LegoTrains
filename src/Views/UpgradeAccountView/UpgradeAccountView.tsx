import UpgradeAccountForm from "../../Components/Molecules/UpgradeAccountForm/UpgradeAccountForm";
import AccountViewTemplate from "../../Components/Organisms/AccountViewTemplate/AccountViewTemplate";
import useTrackPageView from "../../Hooks/useTrackPageView";

const UpgradeAccountView = () => {
  useTrackPageView("User Upgrade Account View");

  return (
    <AccountViewTemplate>
      <UpgradeAccountForm />
    </AccountViewTemplate>
  );
};

export default UpgradeAccountView;

import ResetPasswordForm from "../../Components/Molecules/ResetPasswordForm/ResetPasswordForm";
import AccountViewTemplate from "../../Components/Organisms/AccountViewTemplate/AccountViewTemplate";
import useTrackPageView from "../../Hooks/useTrackPageView";

const ResetPasswordView = () => {
  useTrackPageView("User Reset Password View");

  return (
    <AccountViewTemplate>
      <ResetPasswordForm />
    </AccountViewTemplate>
  );
};

export default ResetPasswordView;

import { FullCenterWrapper } from "../../Components/Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import Footer from "../../Components/Molecules/Footer/Footer";
import ResetPasswordForm from "../../Components/Molecules/ResetPasswordForm/ResetPasswordForm";

const ResetPasswordView = () => {
  return (
    <FullCenterWrapper>
      <ResetPasswordForm />
      <Footer />
    </FullCenterWrapper>
  );
};

export default ResetPasswordView;

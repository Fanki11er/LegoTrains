import { FullCenterWrapper } from "../../Components/Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import AccountRegistrationForm from "../../Components/Molecules/AccountRegistrationForm/AccountRegistrationForm";
import Footer from "../../Components/Molecules/Footer/Footer";

const AccountRegistrationView = () => {
  return (
    <FullCenterWrapper>
      <AccountRegistrationForm />
      <Footer />
    </FullCenterWrapper>
  );
};

export default AccountRegistrationView;

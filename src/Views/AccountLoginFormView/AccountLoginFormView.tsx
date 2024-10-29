import { FullCenterWrapper } from "../../Components/Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import AccountLoginForm from "../../Components/Molecules/AccountLoginForm/AccountLoginForm";
import Footer from "../../Components/Molecules/Footer/Footer";

const AccountLoginFormView = () => {
  return (
    <FullCenterWrapper>
      <AccountLoginForm />
      <Footer />
    </FullCenterWrapper>
  );
};

export default AccountLoginFormView;

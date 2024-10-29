import { FullCenterWrapper } from "../../Components/Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import Footer from "../../Components/Molecules/Footer/Footer";
import UpgradeAccountForm from "../../Components/Molecules/UpgradeAccountForm/UpgradeAccountForm";

const UpgradeAccountView = () => {
  return (
    <FullCenterWrapper>
      <UpgradeAccountForm />
      <Footer />
    </FullCenterWrapper>
  );
};

export default UpgradeAccountView;

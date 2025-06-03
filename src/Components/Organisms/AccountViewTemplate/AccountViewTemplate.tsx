import { PropsWithChildren } from "react";
import { FullCenterWrapper } from "../../Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import Logo from "../../Molecules/Logo/Logo";
import Footer from "../../Molecules/Footer/Footer";
import { AccountViewTemplateLogoWrapper } from "./AccountViewTemplate.styles";

const AccountViewTemplate = ({ children }: PropsWithChildren) => {
  return (
    <FullCenterWrapper>
      <AccountViewTemplateLogoWrapper>
        <Logo />
      </AccountViewTemplateLogoWrapper>
      {children}
      <Footer />
    </FullCenterWrapper>
  );
};

export default AccountViewTemplate;

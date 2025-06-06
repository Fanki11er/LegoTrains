import { PropsWithChildren } from "react";
import Logo from "../../Molecules/Logo/Logo";
import Footer from "../../Molecules/Footer/Footer";
import {
  AccountViewTemplateLogoWrapper,
  AccountViewTemplateWrapper,
} from "./AccountViewTemplate.styles";

const AccountViewTemplate = ({ children }: PropsWithChildren) => {
  return (
    <AccountViewTemplateWrapper>
      <AccountViewTemplateLogoWrapper>
        <Logo />
      </AccountViewTemplateLogoWrapper>
      {children}
      <Footer />
    </AccountViewTemplateWrapper>
  );
};

export default AccountViewTemplate;

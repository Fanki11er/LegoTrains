import { APP_VERSION } from "../../../main";
import {
  FooterIconsWrapper,
  FooterLogo,
  FooterLogoLink,
  FooterVersionInfo,
  FooterWrapper,
} from "./Footer.styles";

import gitHubLogo from "../../../assets/svg/GitHubLogo.svg";
import linkedInLogo from "../../../assets/svg/LinkedInLogo.svg";
import youTubeLogo from "../../../assets/svg/YoutubeLogo.svg";
import kdzLogo from "../../../assets/svg/KdzLogo.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIconsWrapper>
        <FooterLogoLink href={"https://github.com/Fanki11er"} target={"_blank"}>
          <FooterLogo src={gitHubLogo} alt={"GitHub logo"} />
        </FooterLogoLink>
        <FooterLogoLink
          href={"https://www.linkedin.com/in/dziedzic-k/"}
          target={"_blank"}
        >
          <FooterLogo src={linkedInLogo} alt={"LinkedIn logo"} />
        </FooterLogoLink>
        <FooterLogoLink
          href={
            "https://www.youtube.com/playlist?list=PLmF_0FAPtKqHSusK617xdx6xrl3ZdzwaK"
          }
          target={"_blank"}
        >
          <FooterLogo src={youTubeLogo} alt={"Youtube logo"} />
        </FooterLogoLink>
        <FooterLogoLink
          href={"https://dziedzic-about-me.firebaseapp.com"}
          target={"_blank"}
        >
          <FooterLogo src={kdzLogo} alt={"Author logo"} />
        </FooterLogoLink>
      </FooterIconsWrapper>
      <FooterVersionInfo>{APP_VERSION}</FooterVersionInfo>
    </FooterWrapper>
  );
};

export default Footer;

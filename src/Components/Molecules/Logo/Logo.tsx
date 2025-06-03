import { LogoImage } from "./Logo.styles";
import logoImage from "../../../assets/svg/legoTrainsLogo.svg";

const Logo = () => {
  return <LogoImage src={logoImage} alt={"Lego trains logo"} />;
};

export default Logo;

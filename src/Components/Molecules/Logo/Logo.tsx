import { LogoImage } from "./Logo.styles";
import logoImage from "../../../assets/svg/LegoTrainsLogo.svg";
import { Link } from "react-router-dom";
import { paths } from "../../../router/routerPaths";

const Logo = () => {
  return (
    <Link to={paths.rootPath}>
      <LogoImage src={logoImage} alt={"Lego trains logo"} />
    </Link>
  );
};

export default Logo;

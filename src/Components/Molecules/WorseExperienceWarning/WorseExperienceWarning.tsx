import useDetectMobile from "../../../Hooks/useDetectMobile";
import { DashboardWarning } from "../../Atoms/DashboardWarning/DashboardWarning.styles";

const WorseExperienceWarning = () => {
  const isMobile = useDetectMobile();

  return isMobile ? (
    <DashboardWarning>
      This is mobile version of the application. For better experience use
      desktop version.
    </DashboardWarning>
  ) : null;
};

export default WorseExperienceWarning;

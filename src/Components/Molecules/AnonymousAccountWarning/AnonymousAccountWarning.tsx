import useAuth from "../../../Hooks/useAuth";
import { paths } from "../../../router/routerPaths";
import { DashboardWarning } from "../../Atoms/DashboardWarning/DashboardWarning.styles";

import { UpgradeAccountLink } from "./AnonymousAccountWarning.styles";

const { upgradeAccountPath } = paths;

const AnonymousAccountWarning = () => {
  const { currentUser } = useAuth();
  const isAnonymous = currentUser?.isAnonymous;
  return isAnonymous ? (
    <DashboardWarning>
      This is anonymous account. Your progress will not be save. Upgrade to free
      standard account for full experience of this application
      <UpgradeAccountLink to={upgradeAccountPath}>Upgrade</UpgradeAccountLink>
    </DashboardWarning>
  ) : null;
};

export default AnonymousAccountWarning;

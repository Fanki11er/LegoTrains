import { paths } from "../../../router/routerPaths";
import {
  AnonymousAccountWarningWrapper,
  UpgradeAccountLink,
} from "./AnonymousAccountWarning.styles";

const { upgradeAccountPath } = paths;

const AnonymousAccountWarning = () => {
  return (
    <AnonymousAccountWarningWrapper>
      This is anonymous account. Your progress will not be save. Upgrade to free
      standard account for full experience of this application
      <UpgradeAccountLink to={upgradeAccountPath}>Upgrade</UpgradeAccountLink>
    </AnonymousAccountWarningWrapper>
  );
};

export default AnonymousAccountWarning;

import { DashboardFutureSetInformationData } from "../../../Types/DashboardSetInformationData";
import {
  DashboardFutureSetInformationImage,
  DashboardFutureSetInformationSpan,
  DashboardFutureSetsInformationWrapper,
} from "./DashboardFutureSetsInformation.styles";

type Props = {
  dashboardFutureSetInformationData: DashboardFutureSetInformationData;
};

const DashboardFutureSetsInformation = ({
  dashboardFutureSetInformationData,
}: Props) => {
  const { setName, setVersion, imagePath, informationText } =
    dashboardFutureSetInformationData;
  return (
    <DashboardFutureSetsInformationWrapper>
      <h3>{setName}</h3>
      <span>{`Set version: ${setVersion}`}</span>
      <DashboardFutureSetInformationImage src={imagePath} alt={"Cover image"} />
      <DashboardFutureSetInformationSpan>
        {informationText || "Available soon..."}
      </DashboardFutureSetInformationSpan>
    </DashboardFutureSetsInformationWrapper>
  );
};

export default DashboardFutureSetsInformation;

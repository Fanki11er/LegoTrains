import {
  DashboardSetInformationData,
  SetInformationDTO,
} from "../../../Types/DashboardSetInformationData";
import {
  DashboardSetInformationImage,
  DashboardSetInformationWrapper,
} from "./DashboardSetInformation.styles";
type Props = {
  dashboardSetInformationData: DashboardSetInformationData;
  setInformationDTO?: SetInformationDTO;
};

const DashboardSetInformation = ({
  dashboardSetInformationData,
  setInformationDTO,
}: Props) => {
  const { setName, setVersion, allModels, imagePath } =
    dashboardSetInformationData;

  return (
    <DashboardSetInformationWrapper
      $isCompleted={setInformationDTO ? setInformationDTO.isCompleted : false}
    >
      <h3>{setName}</h3>
      <span>{`Set version: ${setVersion}`}</span>
      <DashboardSetInformationImage src={imagePath} alt={"Cover image"} />
      <span>{`Completed models: ${
        setInformationDTO ? setInformationDTO.completedModels : 0
      }/${allModels}`}</span>
    </DashboardSetInformationWrapper>
  );
};

export default DashboardSetInformation;

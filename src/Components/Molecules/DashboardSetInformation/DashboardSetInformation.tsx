import { SetPersistanceData } from "../../../Classes/PersistanceModule";
import { DashboardSetInformationData } from "../../../Types/DashboardSetInformationData";
import {
  DashboardSetInformationImage,
  DashboardSetInformationWrapper,
} from "./DashboardSetInformation.styles";
type Props = {
  dashboardSetInformationData: DashboardSetInformationData;
  setInformationDTO?: SetPersistanceData;
};

const DashboardSetInformation = ({
  dashboardSetInformationData,
  setInformationDTO,
}: Props) => {
  const { setName, setVersion, allModels, imagePath } =
    dashboardSetInformationData;

  return (
    <DashboardSetInformationWrapper
      $isCompleted={
        setInformationDTO
          ? setInformationDTO.finishedModelsNumber === allModels
          : false
      }
    >
      <h3>{setName}</h3>
      <span>{`Set version: ${setVersion}`}</span>
      <DashboardSetInformationImage src={imagePath} alt={"Cover image"} />
      <span>{`Completed models: ${
        setInformationDTO ? setInformationDTO.finishedModelsNumber : 0
      }/${allModels}`}</span>
    </DashboardSetInformationWrapper>
  );
};

export default DashboardSetInformation;

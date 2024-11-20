import { SetPersistanceData } from "../../../Classes/PersistenceModule";
import { legoSetRouterNavigationPath } from "../../../router/routerPaths";
import { DashboardSetInformationData } from "../../../Types/DashboardSetInformationData";
import { DashboardSetStatus } from "../../../Types/DashboardSetStatus";
import {
  ResetSetButton,
  ResetSetButtonImage,
} from "../ResetSetButton/ResetSetButton.styles";
import resetSetIcon from "../../../assets/svg/ResetSetIcon.svg";

import {
  DashboardSetInformationImage,
  DashboardSetInformationWrapper,
  OpenSetLink,
} from "./DashboardSetInformation.styles";
type Props = {
  dashboardSetInformationData: DashboardSetInformationData;
  setInformationDTO?: SetPersistanceData;
  //setId: string;
  handleToggleResetModal: (setId: string) => void;
};

const DashboardSetInformation = ({
  dashboardSetInformationData,
  setInformationDTO,
  handleToggleResetModal,
}: Props) => {
  const { setName, setVersion, allModels, imagePath, setId } =
    dashboardSetInformationData;

  const setStatus = (
    setInformationDTO: SetPersistanceData | undefined,
    allModels: number
  ): DashboardSetStatus => {
    if (!setInformationDTO) {
      return "";
    }
    if (setInformationDTO.finishedModelsNumber === allModels) {
      return "completed";
    } else if (setInformationDTO) {
      return "started";
    } else {
      return "";
    }
  };

  return (
    <DashboardSetInformationWrapper
      $status={setStatus(setInformationDTO, allModels)}
    >
      {setInformationDTO && (
        <ResetSetButton
          onClick={() => handleToggleResetModal(setId)}
          title={"Start set from beginning"}
        >
          <ResetSetButtonImage src={resetSetIcon} alt={"Reset button image"} />
        </ResetSetButton>
      )}
      <h3>{setName}</h3>
      <span>{`Set version: ${setVersion}`}</span>
      <DashboardSetInformationImage src={imagePath} alt={"Cover image"} />
      <span>{`Completed models: ${
        setInformationDTO ? setInformationDTO.finishedModelsNumber : 0
      }/${allModels}`}</span>
      <OpenSetLink to={legoSetRouterNavigationPath(setId)}>Open</OpenSetLink>
    </DashboardSetInformationWrapper>
  );
};

export default DashboardSetInformation;

import Floor from "../../Components/3DModels/Floor/Floor";
import SteamLocomotive_7722 from "../../Components/3DModels/TrainModels/SteamLocomotive_7722/SteamLocomotive_7722";
import Scene from "../../Components/Organisms/Scene/Scene";
import TrainInstructionProvider from "../../Providers/TrainInstructionProvider";
import { createInstruction } from "./setInstruction";
import PersistanceDataProvider from "../../Providers/PersistanceDataProvider";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ReturnButton } from "../../Components/Atoms/Buttons/Buttons.styles";
import { paths } from "../../router/routerPaths";

type Props = {
  legoSetId: string;
};
const Set722V1 = ({ legoSetId }: Props) => {
  const navigate = useNavigate();
  const instruction = useMemo(() => {
    return createInstruction();
  }, []);
  return (
    <PersistanceDataProvider instruction={instruction} legoSetId={legoSetId}>
      <Scene>
        <TrainInstructionProvider instruction={instruction}>
          <Floor />
          <SteamLocomotive_7722 />
        </TrainInstructionProvider>
      </Scene>
      <ReturnButton onClick={() => navigate(paths.userDashboardRouterPath)}>
        Return
      </ReturnButton>
    </PersistanceDataProvider>
  );
};

export default Set722V1;

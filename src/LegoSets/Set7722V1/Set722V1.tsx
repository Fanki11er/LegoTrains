import Floor from "../../Components/3DModels/Floor/Floor";
import SteamLocomotive_7722 from "../../Components/3DModels/TrainModels/SteamLocomotive_7722/SteamLocomotive_7722";
import Scene from "../../Components/Organisms/Scene/Scene";
import TrainInstructionProvider from "../../Providers/TrainInstructionProvider";
import { createInstruction } from "./setInstruction";
import PersistanceDataProvider from "../../Providers/PersistanceDataProvider";
import { useMemo } from "react";

type Props = {
  legoSetId: string;
};
const Set722V1 = ({ legoSetId }: Props) => {
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
    </PersistanceDataProvider>
  );
};

export default Set722V1;

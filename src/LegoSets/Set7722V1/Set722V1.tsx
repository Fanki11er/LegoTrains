import Floor from "../../Components/3DModels/Floor/Floor";
import SteamLocomotive_7722 from "../../Components/3DModels/TrainModels/SteamLocomotive_7722/SteamLocomotive_7722";
import Scene from "../../Components/Organisms/Scene/Scene";
import TrainInstructionProvider from "../../Providers/TrainInstructionProvider";
import { createInstruction } from "./setInstruction";
import PersistanceDataProvider from "../../Providers/PersistanceDataProvider";

const set7722Instruction = createInstruction();
type Props = {
  legoSetId: string;
};
const Set722V1 = ({ legoSetId }: Props) => {
  return (
    <>
      <Scene>
        <PersistanceDataProvider
          instruction={set7722Instruction}
          legoSetId={legoSetId}
        >
          <TrainInstructionProvider instruction={set7722Instruction}>
            <Floor />
            <SteamLocomotive_7722 />
          </TrainInstructionProvider>
        </PersistanceDataProvider>
      </Scene>
    </>
  );
};

export default Set722V1;

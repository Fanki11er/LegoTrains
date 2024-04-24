import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { TrainInstruction } from "../Classes/TrainInstruction";
import { PartInfo } from "../Types/PartInfo";
import { useThree } from "@react-three/fiber";

export const TrainInstructionContext = createContext({
  handleGetPartsList: (): PartInfo[] => [],
  handleGetMarkersForSelectedPart: (partId: string) => {
    partId;
  },
});
type InstructionData = {
  instruction: TrainInstruction;
};

const TrainInstructionProvider = (
  props: PropsWithChildren & InstructionData
) => {
  const { children, instruction } = props;
  const { scene } = useThree();
  console.log(scene);
  const trainInstruction = useRef(instruction);
  useEffect(() => {
    if (trainInstruction.current) {
      trainInstruction.current.loadScene(scene);
    }
  }, [scene]);

  const handleGetPartsList = useCallback(() => {
    if (trainInstruction.current) {
      return trainInstruction.current.getActiveModelPartsList();
    }
    return [];
  }, []);

  const handleGetMarkersForSelectedPart = useCallback((partId: string) => {
    const activeModel = trainInstruction.current.getActiveModel();
    return activeModel.getMarkersForSelectedPart(partId);
  }, []);
  const context = {
    handleGetPartsList,
    handleGetMarkersForSelectedPart,
  };

  return (
    <TrainInstructionContext.Provider value={context}>
      {children}
    </TrainInstructionContext.Provider>
  );
};

export default TrainInstructionProvider;

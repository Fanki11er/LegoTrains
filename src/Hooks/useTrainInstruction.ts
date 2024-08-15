import { useContext } from "react";
import { TrainInstructionContext } from "../Providers/TrainInstructionProvider";

const useTrainInstruction = () => {
  return useContext(TrainInstructionContext);
};

export default useTrainInstruction;

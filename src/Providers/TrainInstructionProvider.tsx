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
import { Object3D, Object3DEventMap } from "three";

export const TrainInstructionContext = createContext({
  handleGetPartsList: (): PartInfo[] => [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleGetMarkersForSelectedPart: (_partId: string) =>
    [] as Object3D<Object3DEventMap>[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleGetMarkerById: (_id: number) =>
    undefined as Object3D<Object3DEventMap> | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleFinishPartConnection: (_marker: Object3D) => {},
  handleGetModelMarkersPath: () => null as string | null,
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

  const handleGetMarkerById = useCallback((id: number) => {
    return trainInstruction.current.getMarkerById(id);
  }, []);

  const handleGetMarkersForSelectedPart = useCallback(
    (partId: string): Object3D<Object3DEventMap>[] => {
      const activeModel = trainInstruction.current.getActiveModel();
      if (activeModel) {
        return activeModel.getMarkersForSelectedPart(partId);
      }
      return [];
    },
    []
  );

  const handleFinishPartConnection = useCallback((marker: Object3D) => {
    trainInstruction.current.finishPartConnection(marker);
  }, []);

  const handleGetModelMarkersPath = useCallback(() => {
    const activeModel = trainInstruction.current.getActiveModel();
    if (activeModel) {
      return activeModel.getModelMarkersPath();
    }
    return null;
  }, []);

  const context = {
    handleGetPartsList,
    handleGetMarkersForSelectedPart,
    handleGetMarkerById,
    handleFinishPartConnection,
    handleGetModelMarkersPath,
  };

  return (
    <TrainInstructionContext.Provider value={context}>
      {children}
    </TrainInstructionContext.Provider>
  );
};

export default TrainInstructionProvider;

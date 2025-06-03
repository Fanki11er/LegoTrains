import Scene from "../../Organisms/Scene/Scene";
import TrainInstructionProvider from "../../../Providers/TrainInstructionProvider";
import PersistenceDataProvider from "../../../Providers/PersistenceDataProvider";
import { Suspense, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ReturnButton } from "../../Atoms/Buttons/Buttons.styles";
import { paths } from "../../../router/routerPaths";
import TrainModel, { TrainModelProps } from "../TrainModel/TrainModel";
import { TrainInstruction } from "../../../Classes/TrainInstruction";
import FinishedSetCongratulationsBanner from "../../Molecules/FinishedSetCongratulationsBanner/FinishedSetCongratulationsBanner";
import { FullCenterWrapper } from "../../Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import SubmitIndicator from "../../Molecules/SubmitIndicator/SubmitIndicator";

type Props = {
  legoSetId: string;
  createInstruction: () => TrainInstruction;
  model: (props: TrainModelProps) => JSX.Element;
};

const Experience = ({ legoSetId, createInstruction, model }: Props) => {
  const navigate = useNavigate();
  const instruction = useMemo(() => {
    return createInstruction();
  }, [createInstruction]);

  return (
    <Suspense
      fallback={
        <FullCenterWrapper>
          <SubmitIndicator size={150} />
        </FullCenterWrapper>
      }
    >
      <PersistenceDataProvider instruction={instruction} legoSetId={legoSetId}>
        <Scene>
          <TrainInstructionProvider instruction={instruction}>
            <TrainModel model={(props) => model(props)} />
            <FinishedSetCongratulationsBanner />
          </TrainInstructionProvider>
        </Scene>
        <ReturnButton onClick={() => navigate(paths.userDashboardRouterPath)}>
          Return
        </ReturnButton>
      </PersistenceDataProvider>
    </Suspense>
  );
};

export default Experience;

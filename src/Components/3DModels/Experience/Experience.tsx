import Scene from "../../Organisms/Scene/Scene";
import TrainInstructionProvider from "../../../Providers/TrainInstructionProvider";
import PersistenceDataProvider from "../../../Providers/PersistenceDataProvider";
import { Suspense, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ReturnButton } from "../../Atoms/Buttons/Buttons.styles";
import { paths } from "../../../router/routerPaths";
import TrainModel, { TrainModelProps } from "../TrainModel/TrainModel";
import { TrainInstruction } from "../../../Classes/TrainInstruction";
import FinishedSetCongratulationsBanner from "../../Molecules/FinishedSetCongratulationsBanner/FinishedSetCongratulationsBanner";
import { FullCenterWrapper } from "../../Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import SubmitIndicator from "../../Molecules/SubmitIndicator/SubmitIndicator";
import { useQueryClient } from "@tanstack/react-query";
import { MODELS_DATA, SET_DATA } from "../../../Api/queryKeys";

type Props = {
  legoSetId: string;
  createInstruction: () => TrainInstruction;
  model: (props: TrainModelProps) => JSX.Element;
};

const Experience = ({ legoSetId, createInstruction, model }: Props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const instruction = useMemo(() => {
    return createInstruction();
  }, [createInstruction]);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [MODELS_DATA, legoSetId],
      });
      queryClient.removeQueries({
        queryKey: [SET_DATA, legoSetId],
      });
    };
  }, [legoSetId, queryClient]);

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

import { Model } from "../../Classes/Model";
import { TrainInstruction } from "../../Classes/TrainInstruction";
import { LegoBlock } from "../../Types/LegoBlock";
import { LegoBlockType } from "../../Types/LegoBlockType";

export class SetLegoBlocks {
  private setLegoBlocks: LegoBlock[] = [];
  private currentId = 0;
  private trainInstruction: TrainInstruction;

  constructor(trainInstruction: TrainInstruction) {
    this.trainInstruction = trainInstruction;
  }

  private incrementId = () => {
    this.currentId += 1;
  };

  private findModelByName = (modelName: string, models: Model[]) => {
    return models.find((model) => {
      return model.getModelName() === modelName;
    });
  };

  addForModelPhaseBlocks = (
    modelName: string,
    phaseNumber: number,
    legoBlocksTypes: LegoBlockType[]
  ) => {
    const model = this.findModelByName(
      modelName,
      this.trainInstruction.getModels()
    );
    if (!model) {
      return;
    }

    const legoBlocks: LegoBlock[] = legoBlocksTypes.map((block) => {
      this.incrementId();
      return { ...block, partId: this.currentId };
    });

    this.setLegoBlocks.push(...legoBlocks);
    model.addPhase(phaseNumber, legoBlocks);
  };

  getSetLegoBlocks = () => {
    return this.setLegoBlocks;
  };
}

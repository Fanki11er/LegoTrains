import { NeededPartInfo } from "../Types/NeededPartInfo";
import { PartInfo } from "../Types/PartInfo";

export class Phase {
  private phaseNumber: number;
  private neededPartsList: NeededPartInfo[] = [];
  private phasePartsList: PartInfo[] = [];

  constructor(phaseNumber: number, phasePartsList: PartInfo[]) {
    this.phaseNumber = phaseNumber;
    this.addPartsToPhase(phasePartsList);
  }

  getPhaseNumber = () => {
    return this.phaseNumber;
  };

  checkIfPartIsNeededInPhase = (partId: string) => {
    const currentPriority = this.getCurrentPriority();

    if (
      this.neededPartsList.find((part) => {
        return part.partId === partId && part.partPriority === currentPriority;
      })
    ) {
      return true;
    }
    return false;
  };

  updateNeededPartList = (partId: string) => {
    const recordIndexToRemove = this.neededPartsList.findIndex((part) => {
      return part.partId === partId;
    });
    this.neededPartsList.splice(recordIndexToRemove, 1);

    return this.neededPartsList.length;
  };

  getPhasePartsList = () => {
    return this.phasePartsList;
  };

  addPartsToPhase = (partInfoList: PartInfo[]) => {
    partInfoList.forEach((partInfo) => {
      this.phasePartsList.push(partInfo);
      this.neededPartsList.push({
        partId: partInfo.partId,
        partPriority: partInfo.partPriority,
      });
    });
  };

  private getCurrentPriority = () => {
    const priorities = this.neededPartsList.map((part) => {
      return part.partPriority;
    });
    return Math.min(...priorities);
  };
}

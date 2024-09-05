import { PartInfo } from "../Types/PartInfo";

export class Phase {
  private phaseNumber: number;
  private phasePartsList: PartInfo[] = [];

  constructor(phaseNumber: number, phasePartsList: PartInfo[]) {
    this.phaseNumber = phaseNumber;
    this.addPartsToPhase(phasePartsList);
  }

  getPhaseNumber = () => {
    return this.phaseNumber;
  };

  checkIfPartTypeIsNeededInPhase = (partType: string) => {
    return this.phasePartsList.filter((part) => {
      return part.partType === partType;
    });
  };

  updateNeededPartList = (slotId: string) => {
    const recordIndexToRemove = this.phasePartsList.findIndex((part) => {
      return part.slotId === slotId;
    });
    this.phasePartsList.splice(recordIndexToRemove, 1);

    return this.phasePartsList.length;
  };

  getPhasePartsList = () => {
    return this.phasePartsList;
  };

  addPartsToPhase = (partInfoList: PartInfo[]) => {
    partInfoList.forEach((partInfo) => {
      this.phasePartsList.push(partInfo);
    });
  };
}

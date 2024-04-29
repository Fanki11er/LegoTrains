import { PartInfo } from "../Types/PartInfo";

export class Phase {
  private phaseNumber: number;
  private neededPartsList: string[] = [];
  private phasePartsList: PartInfo[] = [];

  constructor(phaseNumber: number, phasePartsList: PartInfo[]) {
    this.phaseNumber = phaseNumber;
    this.addPartsToPhase(phasePartsList);
  }

  getPhaseNumber = () => {
    return this.phaseNumber;
  };

  checkIfPartIsNeededInPhase = (partId: string) => {
    if (this.neededPartsList.includes(partId)) {
      return true;
    }
    return false;
  };

  updateNeededPartList = (partId: string) => {
    const recordIndexToRemove = this.neededPartsList.indexOf(partId);
    this.neededPartsList.splice(recordIndexToRemove, 1);

    return this.neededPartsList.length;
  };

  getPhasePartsList = () => {
    return this.phasePartsList;
  };

  addPartsToPhase = (partInfoList: PartInfo[]) => {
    partInfoList.forEach((partInfo) => {
      this.phasePartsList.push(partInfo);
      this.neededPartsList.push(partInfo.partId);
    });
  };
}

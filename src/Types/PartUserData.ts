export class PartUserData {
  isConnected: boolean;
  partId: number;
  partType: string;
  multipart: boolean;
  modelId?: string;
  constructor(
    partId: number,
    partType: string,
    multipart: boolean,
    isConnected = false,
    modelId = ""
  ) {
    this.partId = partId;
    this.partType = partType;
    this.multipart = multipart;
    this.modelId = modelId;
    this.isConnected = isConnected;
  }
}

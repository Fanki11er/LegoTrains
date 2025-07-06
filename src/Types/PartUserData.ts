export type PartUserData = {
  partId: number;
  partType: string;
  isConnected: string;
  modelId: string | undefined;
  multipart: boolean;
  multiPhases?: boolean;
  activePhase?: string;
};

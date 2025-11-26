export type DashboardSetInformationData = {
  setId: string;
  setName: string;
  setVersion: number | string;
  allModels: number;
  imagePath: string;
};

export type SetInformationDTO = {
  setId: string;
  isCompleted: boolean;
  completedModels: number;
};

export type DashboardFutureSetInformationData = Omit<
  DashboardSetInformationData,
  "allModels"
> & {
  informationText?: string;
};

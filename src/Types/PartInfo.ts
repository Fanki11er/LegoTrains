import { Vector3 } from "three";

export type PartInfo = {
  partPath: string;
  partId: string;
  partStartPosition: Vector3;
  partPriority: number;
  materialId?: string;
  canNotBeRotated?: boolean;
  noAutomaticMoveToGroundLevel?: boolean;
};

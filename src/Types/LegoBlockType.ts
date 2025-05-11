import { Vector3 } from "three";

export type LegoBlockType = {
  partPath: string;
  partType: string;
  slotId: string;
  depends: string[];
  partStartPosition: Vector3;
  materialId?: string;
  canNotBeRotated?: boolean;
  noAutomaticMoveToGroundLevel?: boolean;
  multipart?: boolean;
  childrenMaterialId?: string;
  propagateMainMaterialToChildren?: boolean;
};

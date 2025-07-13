import { Vector3 } from "three";
import { MaterialsTypes } from "../Providers/MaterialsProvider";

export type LegoBlockType = {
  partPath: string;
  partType: string;
  slotId: string;
  depends: string[];
  partStartPosition: Vector3;
  materialId?: MaterialsTypes;
  canNotBeRotated?: boolean;
  noAutomaticMoveToGroundLevel?: boolean;
  multipart?: boolean;
  childrenMaterialId?: string;
  propagateMainMaterialToChildren?: boolean;
  multiPhases?: boolean;
  activePhase?: string;
  phases?: string[];
  doNotArrangeAfterConnectionInNest?: boolean;
};

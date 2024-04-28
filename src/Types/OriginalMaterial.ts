import { Material } from "three";

export type OriginalMaterial = {
  [objectId: string]: Material | Material[];
};

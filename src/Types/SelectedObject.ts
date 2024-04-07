import { Material, Mesh } from "three";

export type SelectedObject = {
  object: Mesh;
  originalMaterial: Material | Material[];
};

import { Color, Mesh } from "three";

export type SelectedObject = {
  object: Mesh;
  originalMaterialColor: Color;
};

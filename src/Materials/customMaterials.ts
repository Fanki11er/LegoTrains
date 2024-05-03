import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { redPlasticMaterial } from "./RedPlasticMaterial";
import { blackPlasticMaterial } from "./BlackPlasticMaterial";
import { nestMaterial } from "./NestMaterial";
import { selectedElementMaterial } from "./SelectedElementMaterial";
import { blueFloorMaterial } from "./BlueFloorMaterial";

type CustomMaterials = {
  [materialId: string]: MeshStandardMaterial | MeshPhysicalMaterial;
};
export const customMaterials: CustomMaterials = {
  redPlasticMaterial: redPlasticMaterial,
  blackPlasticMaterial: blackPlasticMaterial,
  nestMaterial: nestMaterial,
  selectedElementMaterial: selectedElementMaterial,
  blueFloorMaterial: blueFloorMaterial,
};
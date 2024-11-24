import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { redPlasticMaterial } from "./RedPlasticMaterial";
import { blackPlasticMaterial } from "./BlackPlasticMaterial";
import { nestMaterial } from "./NestMaterial";
import { selectedElementMaterial } from "./SelectedElementMaterial";
import { blueFloorMaterial } from "./BlueFloorMaterial";
import { whiteTransparentMaterial } from "./WhiteTransparentMaterial";
import { redTransparentMaterial } from "./RedTransparentMaterial";
import { yellowPLasticMaterial } from "./YellowPlasticMaterial";
import { selectedElementMaterialOrange } from "./SelectElementMaterialOrange";
import { oldGrayPlasticMaterial } from "./OldGrayPlasticMaterial";

type CustomMaterials = {
  [materialId: string]: MeshStandardMaterial | MeshPhysicalMaterial;
};
export const customMaterials: CustomMaterials = {
  redPlasticMaterial: redPlasticMaterial,
  blackPlasticMaterial: blackPlasticMaterial,
  nestMaterial: nestMaterial,
  selectedElementMaterial: selectedElementMaterial,
  selectedElementMaterialOrange: selectedElementMaterialOrange,
  blueFloorMaterial: blueFloorMaterial,
  whiteTransparentMaterial: whiteTransparentMaterial,
  redTransparentMaterial: redTransparentMaterial,
  yellowPLasticMaterial: yellowPLasticMaterial,
  oldGrayPlasticMaterial: oldGrayPlasticMaterial,
};

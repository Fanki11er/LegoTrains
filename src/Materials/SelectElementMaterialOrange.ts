import { Color, MeshPhysicalMaterial } from "three";

export const selectedElementMaterialOrange = new MeshPhysicalMaterial();
selectedElementMaterialOrange.color = new Color("orange");
selectedElementMaterialOrange.clearcoat = 1;
selectedElementMaterialOrange.clearcoatRoughness = 0.5;

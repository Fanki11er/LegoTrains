import { Color, MeshPhysicalMaterial } from "three";

export const selectedElementMaterial = new MeshPhysicalMaterial();
selectedElementMaterial.color = new Color("lightgreen");
selectedElementMaterial.clearcoat = 1;
selectedElementMaterial.clearcoatRoughness = 0.5;

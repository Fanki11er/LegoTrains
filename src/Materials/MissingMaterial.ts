import { Color, MeshPhysicalMaterial } from "three";

export const missingMaterial = new MeshPhysicalMaterial();
missingMaterial.roughness = 0.6;
missingMaterial.metalness = 0.8;
missingMaterial.color = new Color(0xc6d5c8);
missingMaterial.specularIntensity = 0.5;
missingMaterial.clearcoat = 1;
missingMaterial.clearcoatRoughness = 0.5;

import { Color, MeshPhysicalMaterial } from "three";

export const blueFloorMaterial = new MeshPhysicalMaterial();
blueFloorMaterial.roughness = 0.8;
blueFloorMaterial.metalness = 0;
blueFloorMaterial.color = new Color(0x2e3d68);
blueFloorMaterial.specularIntensity = 0;

import { Color, MeshPhysicalMaterial } from "three";
export const yellowPLasticMaterial = new MeshPhysicalMaterial();

yellowPLasticMaterial.roughness = 0.2;
yellowPLasticMaterial.metalness = 0.6;
yellowPLasticMaterial.color = new Color(0xfee902);
yellowPLasticMaterial.specularIntensity = 0.5;
yellowPLasticMaterial.clearcoat = 1;
yellowPLasticMaterial.clearcoatRoughness = 0.5;

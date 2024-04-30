import { Color, MeshPhysicalMaterial } from "three";
export const blackPlasticMaterial = new MeshPhysicalMaterial();

blackPlasticMaterial.roughness = 0.1;
blackPlasticMaterial.metalness = 0.8;
blackPlasticMaterial.color = new Color(0x000000);
blackPlasticMaterial.specularIntensity = 0.5;
// blackPlasticMaterial.clearcoat = 1;
// blackPlasticMaterial.clearcoatRoughness = 0.5;

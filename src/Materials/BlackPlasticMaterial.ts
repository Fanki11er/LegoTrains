import { Color, MeshPhysicalMaterial } from "three";
export const blackPlasticMaterial = new MeshPhysicalMaterial();

blackPlasticMaterial.roughness = 0.2;
blackPlasticMaterial.metalness = 0.6;
blackPlasticMaterial.color = new Color(0x000000);
blackPlasticMaterial.specularIntensity = 0.5;
// blackPlasticMaterial.clearcoat = 1;
// blackPlasticMaterial.clearcoatRoughness = 0.5;

import { Color, MeshPhysicalMaterial } from "three";

export const redPlasticMaterial = new MeshPhysicalMaterial();
redPlasticMaterial.roughness = 0.6;
redPlasticMaterial.metalness = 0.8;
redPlasticMaterial.color = new Color(0xf8191a);
redPlasticMaterial.specularIntensity = 0.5;
redPlasticMaterial.clearcoat = 1;
redPlasticMaterial.clearcoatRoughness = 0.5;

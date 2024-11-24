import { Color, MeshPhysicalMaterial } from "three";

export const oldGrayPlasticMaterial = new MeshPhysicalMaterial();
oldGrayPlasticMaterial.roughness = 0.6;
oldGrayPlasticMaterial.metalness = 0.8;
oldGrayPlasticMaterial.color = new Color(0xc6d5c8);
oldGrayPlasticMaterial.specularIntensity = 0.5;
oldGrayPlasticMaterial.clearcoat = 1;
oldGrayPlasticMaterial.clearcoatRoughness = 0.5;

import { Color, MeshPhysicalMaterial } from "three";

export const whiteTransparentMaterial = new MeshPhysicalMaterial();
whiteTransparentMaterial.roughness = 0.6;
whiteTransparentMaterial.metalness = 0.;
whiteTransparentMaterial.color = new Color(0xffffff);
whiteTransparentMaterial.specularIntensity = 0.1;
whiteTransparentMaterial.clearcoat = 1;
whiteTransparentMaterial.clearcoatRoughness = 0.5;
whiteTransparentMaterial.transparent = true
whiteTransparentMaterial.opacity = 0.6

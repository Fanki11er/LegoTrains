import { Color, MeshPhysicalMaterial } from "three";

export const redTransparentMaterial = new MeshPhysicalMaterial();
redTransparentMaterial.roughness = 0.2;
redTransparentMaterial.metalness = 0.6;
redTransparentMaterial.color = new Color(0xf8191a);
redTransparentMaterial.specularIntensity = 0.5;
redTransparentMaterial.clearcoat = 1;
redTransparentMaterial.clearcoatRoughness = 0.5;
redTransparentMaterial.transparent = true
redTransparentMaterial.opacity = 0.6
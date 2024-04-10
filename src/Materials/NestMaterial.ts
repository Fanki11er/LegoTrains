import { MeshPhysicalMaterial } from "three";

export const nestMaterial = new MeshPhysicalMaterial();
nestMaterial.clearcoat = 1;
nestMaterial.clearcoatRoughness = 0.5;
nestMaterial.transparent = true;
nestMaterial.opacity = 0.5;

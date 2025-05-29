import { Color, MeshPhysicalMaterial } from "three";
import { theme } from "../Theme/theme";

export const blueFloorMaterial = new MeshPhysicalMaterial();
blueFloorMaterial.roughness = 0.3;
blueFloorMaterial.metalness = 0.5;
blueFloorMaterial.color = new Color(theme.colors.floorBlue);
blueFloorMaterial.specularIntensity = 0.8;

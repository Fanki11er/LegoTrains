import { Color, MeshPhysicalMaterial } from "three";
import { theme } from "../Theme/theme";

export const blueFloorMaterial = new MeshPhysicalMaterial();
blueFloorMaterial.roughness = 0.6;
blueFloorMaterial.metalness = 0.7;
blueFloorMaterial.color = new Color(theme.colors.floorBlue);
blueFloorMaterial.specularIntensity = 0.2;

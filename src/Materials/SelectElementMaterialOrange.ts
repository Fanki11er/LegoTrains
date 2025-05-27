import { Color, MeshPhysicalMaterial } from "three";
import { theme } from "../Theme/theme";

export const selectedElementMaterialOrange = new MeshPhysicalMaterial();
selectedElementMaterialOrange.color = new Color(theme.colors.orange);
selectedElementMaterialOrange.clearcoat = 1;
selectedElementMaterialOrange.clearcoatRoughness = 0.5;

import { Color, MeshPhysicalMaterial } from "three";
import { theme } from "../Theme/theme";

export const selectedElementMaterial = new MeshPhysicalMaterial();
selectedElementMaterial.color = new Color(theme.colors.green);
selectedElementMaterial.clearcoat = 1;
selectedElementMaterial.clearcoatRoughness = 0.5;

import { Color, MeshPhysicalMaterial } from "three";
import { theme } from "../Theme/theme";

export const nestMaterial = new MeshPhysicalMaterial();
nestMaterial.clearcoat = 1;
nestMaterial.clearcoatRoughness = 0.5;
nestMaterial.transparent = true;
nestMaterial.opacity = 0.8;
nestMaterial.color = new Color(theme.colors.nestBlue);

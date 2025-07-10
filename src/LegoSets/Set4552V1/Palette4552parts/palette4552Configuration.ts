import { ModelConfiguration } from "../../../Types/ModelTypes";
// @ts-expect-error Not a type
import set4552PaletteModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/Palette4552/Markers.glb";
import { cargoCrain4552PaletteModelBlocks } from "./palette4552ModelBlocks";

export const palette4552Configuration: ModelConfiguration = {
  modelName: "Palette4552Model",
  modelMarkers: set4552PaletteModelMarkers,
  modelBlocks: cargoCrain4552PaletteModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};

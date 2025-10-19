import { ModelConfiguration } from "../../../Types/ModelTypes";
import set4552PaletteModelMarkers from "../../../assets/Set_4552_V1/ModelsMarkers/Palette4552/Markers.glb";
import { cargoCrane4552PaletteModelBlocks } from "./palette4552ModelBlocks";

export const palette4552Configuration: ModelConfiguration = {
  modelName: "Palette4552Model",
  modelMarkers: set4552PaletteModelMarkers,
  modelBlocks: cargoCrane4552PaletteModelBlocks,
  afterConnectArraignmentFunctionsNames: [],
  afterPhaseEndArraignmentFunctionsNames: [],
};

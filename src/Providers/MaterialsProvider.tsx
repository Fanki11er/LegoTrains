import { useGLTF } from "@react-three/drei";
import {
  createContext,
  PropsWithChildren,
  useDeferredValue,
  useMemo,
} from "react";
// @ts-expect-error Missing type
import materialsColorsPalette from "../assets/MaterialsColorsPalette/MaterialsColorsPalette.glb";
import { Material, MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { nestMaterial } from "../Materials/NestMaterial";
import { selectedElementMaterial } from "../Materials/SelectedElementMaterial";
import { selectedElementMaterialOrange } from "../Materials/SelectElementMaterialOrange";
import { blueFloorMaterial } from "../Materials/BlueFloorMaterial";
import { missingMaterial } from "../Materials/MissingMaterial";
import { instructionPageMaterial } from "../Materials/instructionPageMaterial";
type CustomMaterials = {
  [materialId: string]: MeshStandardMaterial | MeshPhysicalMaterial | Material;
};

export const MaterialsProviderContext = createContext({
  materialsData: {} as CustomMaterials,
});

const MaterialsProvider = ({ children }: PropsWithChildren) => {
  const path = useDeferredValue(materialsColorsPalette);

  const { materials } = useGLTF<string>(path);
  const materialsData: CustomMaterials = useMemo(() => {
    return {
      redPlasticMaterial: materials.GlossyRedPlastic || missingMaterial,
      blackPlasticMaterial: materials.GlossyBlackPlastic || missingMaterial,
      whiteTransparentMaterial: materials.WhiteGlass || missingMaterial,
      redTransparentMaterial: materials.RedGlass || missingMaterial,
      yellowTransparentMaterial: materials.YellowGlass || missingMaterial,
      blueTransparentMaterial: materials.BlueGlass || missingMaterial,
      oldGrayPlasticMaterial:
        materials.GlossyDirtyGrayPlastic || missingMaterial,
      yellowPLasticMaterial: materials.GlossyYellowPlastic || missingMaterial,
      whitePlasticMaterial: materials.GlossyWhitePlastic || missingMaterial,
      bluePlasticMaterial: materials.GlossyBluePlastic || missingMaterial,
      greenPlasticMaterial: materials.GlossyDarkGreenPlastic || missingMaterial,
      nestMaterial: nestMaterial,
      blueFloorMaterial: blueFloorMaterial,
      selectedElementMaterial: selectedElementMaterial,
      selectedElementMaterialOrange: selectedElementMaterialOrange,
      instructionPageMaterial: instructionPageMaterial,
    };
  }, [materials]);

  const value = {
    materialsData,
  };
  return (
    <MaterialsProviderContext.Provider value={value}>
      {children}
    </MaterialsProviderContext.Provider>
  );
};

export default MaterialsProvider;

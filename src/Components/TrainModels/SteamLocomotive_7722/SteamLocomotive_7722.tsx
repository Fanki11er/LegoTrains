import TrainBase_4178 from "../../3DModels/TrainBase_4178/TrainBase_4178";
import Plate_3023 from "../../3DModels/Plate_3023/Plate_3023";
import { Vector3 } from "three";
import { useEffect, useRef } from "react";
import { Group } from "three";
import useModelTree from "../../../Hooks/useModelTree";

const SteamLocomotive_7722 = () => {
  const steamLocomotiveRef = useRef<Group>(null);
  const { modelTree, handleLoadModelTree } = useModelTree();
  useEffect(() => {
    if (steamLocomotiveRef.current && !modelTree) {
      handleLoadModelTree(steamLocomotiveRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steamLocomotiveRef]);

  // useEffect(() => {
  //   if (
  //     elementsData.getBlocksArrayLength() === 0 &&
  //     steamLocomotiveRef.current
  //   ) {
  //     elementsData.fillBlocksArray(steamLocomotiveRef);
  //     elementsData.fillEmptyNestsArray();
  //   }
  //   console.log(elementsData.getBlocksArray());
  //   console.log(elementsData.getEmptyNestArray());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [steamLocomotiveRef]);

  return (
    <group ref={steamLocomotiveRef} castShadow>
      <TrainBase_4178 />
      <Plate_3023 position={new Vector3(0, 0, 100)} />
      <Plate_3023 />
    </group>
  );
};

export default SteamLocomotive_7722;

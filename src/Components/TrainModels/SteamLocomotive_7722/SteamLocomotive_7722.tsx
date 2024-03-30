import TrainBase_4178 from "../../3DModels/TrainBase_4178/TrainBase_4178";
import Plate_3023 from "../../3DModels/Plate_3023/Plate_3023";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { ElementsData } from "../../../Classes/ElementsData";

const SteamLocomotive_7722 = () => {
  const steamLocomotiveRef = useRef<Group>(null);
  const { current: elementsData } = useRef<ElementsData>(new ElementsData());

  useEffect(() => {
    if (
      elementsData.getBlocksArrayLength() === 0 &&
      steamLocomotiveRef.current
    ) {
      elementsData.fillBlocksArray(steamLocomotiveRef);
      elementsData.fillEmptyNestsArray();
    }
    console.log(elementsData.getBlocksArray());
    console.log(elementsData.getEmptyNestArray());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steamLocomotiveRef]);

  return (
    <group ref={steamLocomotiveRef} name="SteamLocomotive_7722">
      <TrainBase_4178 /*rotation={[Math.PI, 0, 0]}*/ />
      <Plate_3023 />
      <Plate_3023 />
    </group>
  );
};

export default SteamLocomotive_7722;

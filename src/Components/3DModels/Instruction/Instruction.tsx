import { useEffect, useRef } from "react";
import { InstructionPageTextures } from "../../../Types/InstructionPageTextures";
import InstructionPage from "../InstructionPage/InstructionPage";
import { Group } from "three";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

type Props = {
  position: [number, number, number];
  instructionTextures: InstructionPageTextures[];
};
const Instruction = ({ position, instructionTextures }: Props) => {
  const instructionRef = useRef<Group>(null);

  useEffect(() => {
    if (instructionRef.current) {
      moveElementToFloorLevel(instructionRef.current);
    }
  }, [instructionRef]);

  const renderInstruction = (
    instructionTextures: InstructionPageTextures[]
  ) => {
    return instructionTextures
      .map((pageTextures, index) => {
        return (
          <InstructionPage
            pageTextures={pageTextures}
            index={index}
            key={index}
          />
        );
      })
      .reverse();
  };

  return (
    <group ref={instructionRef} position={position}>
      {renderInstruction(instructionTextures)}
    </group>
  );
};

export default Instruction;

import { useEffect, useRef } from "react";
import { instruction_textures_7722 } from "../../../InstructionsTextures/Instruction_7722";
import { InstructionPageTextures } from "../../../Types/InstructionPageTextures";
import InstructionPage from "../InstructionPage/InstructionPage";
import { Group } from "three";
import { moveElementToFloorLevel } from "../../../Utilities/utilities";

const Instruction = () => {
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
    <group ref={instructionRef}>
      {renderInstruction(instruction_textures_7722)}
    </group>
  );
};

export default Instruction;
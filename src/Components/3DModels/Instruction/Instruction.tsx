import { useCallback, useEffect, useRef, useState } from "react";
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
  const [onTopPagesIndexes, setOnTopPagesIndexes] = useState<number[]>([0]);
  const pagesCount = instructionTextures.length;

  console.log("onTopPagesIndexes", onTopPagesIndexes);

  const handleSetOnTopPagesIndexUp = useCallback(
    (index: number) => {
      if (onTopPagesIndexes.length === 1) {
        setOnTopPagesIndexes(() => [0, index + 1]);
      } else if (onTopPagesIndexes[1] === pagesCount - 1) {
        setOnTopPagesIndexes(() => [index]);
      } else {
        setOnTopPagesIndexes(() => [index, index + 1]);
      }
    },
    [onTopPagesIndexes, pagesCount]
  );

  const handleSetOnTopPagesIndexDown = useCallback(
    (index: number) => {
      if (onTopPagesIndexes.length === 1) {
        setOnTopPagesIndexes((prev) => [index - 1, prev[0]]);
      } else if (onTopPagesIndexes[0] === 0) {
        setOnTopPagesIndexes(() => [0]);
      } else {
        setOnTopPagesIndexes(() => [index - 1, index]);
      }
    },
    [onTopPagesIndexes]
  );

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
            setIndexUp={handleSetOnTopPagesIndexUp}
            setIndexDown={handleSetOnTopPagesIndexDown}
            onTopPagesIndexes={onTopPagesIndexes}
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

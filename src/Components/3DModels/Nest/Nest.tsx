import { Box } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import useElementContextMenu from "../../../Hooks/useElementContextMenu";
import { useState } from "react";
import { SlotOrConnectorPosition } from "../../../Enums/SlotOrConnectorPosition";

type NestProps = {
  nest: Mesh;
};

const Nest = (props: NestProps) => {
  const { nest } = props;
  const { handleConnectElements } = useElementContextMenu();
  const [isHovered, setIsHovered] = useState(false);
  const figurePosition = () => {
    const side = nest.userData.Position;
    switch (side) {
      case SlotOrConnectorPosition.Top: {
        return new Vector3(nest.position.x, nest.position.y, nest.position.z);
      }
      case SlotOrConnectorPosition.Bottom: {
        return new Vector3(nest.position.x, nest.position.y, nest.position.z);
      }
      default:
        nest.position;
    }
  };
  return (
    <Box
      position={figurePosition()}
      scale={[10, 2, 10]}
      material-color={isHovered ? "green" : "blue"}
      onClick={(e) => {
        e.stopPropagation();
        handleConnectElements(nest);
      }}
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
    />
  );
};

export default Nest;

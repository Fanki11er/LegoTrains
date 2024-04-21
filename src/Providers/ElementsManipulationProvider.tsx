import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { SelectedObject } from "../Types/SelectedObject";
import { Mesh, Quaternion, Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import { selectedElementMaterial } from "../Materials/SelectedElementMaterial";
import { NestElementUserData } from "../Types/NestElementUserData";
import { SlotOrConnector } from "../Enums/SlotsOrConnector";
import { Position } from "../Types/Position";

type SelectedMesh = SelectedObject | null;

export const ElementsManipulationsContext = createContext({
  selectedMesh: null as SelectedMesh,
  freeNestsToConnectElement: [] as Mesh[],
  handleSelectMesh: (mesh: Mesh) => {
    mesh;
  },
  handleResetSelectedMesh: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleProjectElementOnPosition: (_selectedNest: Mesh, _selectedMesh: Mesh) =>
    undefined as Position | undefined,
  handleConnectElements: (selectedNest: Mesh) => {
    selectedNest;
  },
});

const ElementsManipulationsProvider = (props: PropsWithChildren) => {
  const { scene } = useThree();
  const [selectedMesh, setSelectedMesh] = useState<SelectedMesh>(null);
  const [freeNestsToConnectElement, setFreeNestsToConnectElement] = useState<
    Mesh[]
  >([]);

  const builtModelGroup = scene.getObjectByName("BuiltModel");

  useEffect(() => {
    setFreeNestsToConnectElement([]);
    handleFindFreeNestsToConnectElement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMesh]);

  const handleSelectMesh = (element: Mesh) => {
    if (!element.userData.isSlot) {
      const selectedObject: SelectedObject = {
        object: element,
        originalMaterial: element.material,
      };
      element.material = selectedElementMaterial;
      setSelectedMesh(selectedObject);
    }
  };

  const handleResetSelectedMesh = () => {
    if (selectedMesh) {
      selectedMesh.object.material = selectedMesh.originalMaterial;
      setSelectedMesh(null);
    }
  };

  const handleFindFreeNestsToConnectElement = () => {
    const freeNestToConnectElementArray: Mesh[] = [];

    if (
      selectedMesh &&
      builtModelGroup &&
      !selectedMesh.object.userData.isConnected
    ) {
      const selectedPartNumber = getSelectedPartNumber();

      builtModelGroup.children.forEach((model) => {
        const filteredSlots = model.children.filter((slot) => {
          const slotData = slot.userData as NestElementUserData;

          return (
            slotData.Type === SlotOrConnector.NestSlot &&
            slotData.isEmpty &&
            slotData.forPartNumber === selectedPartNumber
          );
        }) as Mesh[];

        freeNestToConnectElementArray.push(...filteredSlots);
      });

      setFreeNestsToConnectElement(freeNestToConnectElementArray);
    }
  };

  const handleProjectElementOnPosition = (
    selectedNest: Mesh,
    selectedMesh: Mesh
  ): Position | undefined => {
    const newPosition = new Vector3();
    const nestWorldPosition = new Vector3();
    const connectorPosition = new Vector3();
    const connectorOffset = new Vector3();

    if (selectedMesh && selectedNest) {
      let projectedMesh = new Mesh() as Mesh | null;
      projectedMesh!.copy(selectedMesh);

      // Get nest rotation
      const newRotation = getTargetRotationQuaternion(selectedNest);

      projectedMesh!.rotation.setFromQuaternion(newRotation);

      const [connector] = projectedMesh!.children.filter((child) => {
        return child.userData.isConnector;
      });

      // Offset between object and its connector
      connector.getWorldPosition(connectorPosition);
      connectorOffset.subVectors(connectorPosition, projectedMesh!.position);

      // Position of the nest
      selectedNest.getWorldPosition(nestWorldPosition);
      // Compute new position
      newPosition.subVectors(nestWorldPosition, connectorOffset);
      projectedMesh = null;
      return {
        position: newPosition,
        rotation: newRotation,
      };
    }
  };

  const handleConnectElements = (selectedNest: Mesh) => {
    if (selectedMesh && selectedNest) {
      moveElementToPositionAndConnect(selectedMesh.object, selectedNest);

      selectedNest.parent?.remove(selectedNest);
      handleResetSelectedMesh();
    }
  };

  const getSelectedPartNumber = () => {
    return selectedMesh?.object.userData.partNumber;
  };

  const moveElementToPositionAndConnect = (
    selectedMesh: Mesh,
    selectedNest: Mesh
  ) => {
    selectedMesh.position.copy(selectedNest.position as Vector3);
    selectedMesh.quaternion.copy(selectedNest.quaternion);

    builtModelGroup?.add(selectedMesh);

    selectedMesh.userData.isConnected = true;
  };

  const getTargetRotationQuaternion = (nest: Mesh) => {
    const targetRotation = new Quaternion();
    nest.getWorldQuaternion(targetRotation);
    return targetRotation;
  };

  const context = {
    selectedMesh,
    freeNestsToConnectElement,
    handleSelectMesh,
    handleResetSelectedMesh,
    handleProjectElementOnPosition,
    handleConnectElements,
  };

  return (
    <ElementsManipulationsContext.Provider value={context}>
      {props.children}
    </ElementsManipulationsContext.Provider>
  );
};

export default ElementsManipulationsProvider;

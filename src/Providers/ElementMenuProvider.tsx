import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Mesh, Vector3 } from "three";
import { NestElementUserData } from "../Types/NestElementUserData";
import { SlotOrConnector } from "../Enums/SlotsOrConnector";
import { ThreeEvent, useThree } from "@react-three/fiber";
import { SelectedObject } from "../Types/SelectedObject";
import { selectedElementMaterial } from "../Materials/SelectedElementMaterial";

type SelectedMesh = SelectedObject | null;

export const ElementContextMenuContext = createContext({
  selectedMesh: null as SelectedMesh,
  freeNestsToConnectElement: [] as Mesh[],
  handleSelectMesh: (event: ThreeEvent<MouseEvent>) => {
    event;
  },
  handleResetSelectedMesh: () => {},
  handleConnectElements: (selectedNest: Mesh) => {
    selectedNest;
  },
});

const ElementContextMenuProvider = (props: PropsWithChildren) => {
  const [selectedMesh, setSelectedMesh] = useState<SelectedMesh>(null);
  const [freeNestsToConnectElement, setFreeNestsToConnectElement] = useState<
    Mesh[]
  >([]);

  const { scene } = useThree();

  const builtModelGroup = scene.getObjectByName("BuiltModel");

  useEffect(() => {
    setFreeNestsToConnectElement([]);
    handleFindFreeNestsToConnectElement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMesh]);

  const handleSelectMesh = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const element = event.eventObject as Mesh;
    if (element.userData.isSlot) {
      handleConnectElements(element);
    } else {
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

  const handleConnectElements = (selectedNest: Mesh) => {
    if (selectedMesh && selectedNest) {
      connectSelectedElementToTheSelectedNest(selectedNest);
      rotateSelectedElement(selectedMesh.object, selectedNest);
      selectedNest.parent?.remove(selectedNest);
      handleResetSelectedMesh();
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

  const getSelectedPartNumber = () => {
    return selectedMesh?.object.userData.partNumber;
  };

  const rotateSelectedElement = (selectedMesh: Mesh, nest: Mesh) => {
    selectedMesh.rotation.set(
      nest.rotation.x,
      nest.rotation.y,
      nest.rotation.z
    );
  };

  const connectSelectedElementToTheSelectedNest = (selectedNest: Mesh) => {
    if (selectedMesh && selectedNest) {
      //const parent = selectedNest.parent;
      const connector = selectedMesh.object.children[0];

      // Offset between object and its connector
      const connectorOffset = new Vector3();
      connectorOffset.subVectors(
        selectedMesh.object.position,
        connector.position
      );

      console.log(connectorOffset.y);

      // Compute new position of the object
      const newPosition = new Vector3();
      //selectedNest.localToWorld(newPosition);

      newPosition.addVectors(newPosition, connectorOffset);

      //Move connector to nest
      //selectedNest.localToWorld(connector.position);
      //connector.matrixAutoUpdate = false;

      // Move Object to its new position
      selectedMesh.object.translateX(
        selectedNest.position.x - selectedMesh.object.position.x
      );
      // selectedMesh.object.position.setY(selectedNest.position.y);
      selectedMesh.object.translateY(
        selectedNest.position.y -
          selectedMesh.object.position.y +
          connectorOffset.y
      );
      selectedMesh.object.translateZ(
        selectedNest.position.z - selectedMesh.object.position.z
      );
      selectedMesh.object.children[0].matrixWorldNeedsUpdate = true;
      builtModelGroup?.add(selectedMesh.object);
      selectedMesh.object.userData.isConnected = true;
    }
  };

  const context = {
    selectedMesh,
    freeNestsToConnectElement,
    handleSelectMesh,
    handleResetSelectedMesh,
    handleConnectElements,
  };

  return (
    <ElementContextMenuContext.Provider value={context}>
      {props.children}
    </ElementContextMenuContext.Provider>
  );
};

export default ElementContextMenuProvider;

/*
   function animate() {

				requestAnimationFrame( animate );

				const delta = clock.getDelta();

				if ( ! mesh.quaternion.equals( targetQuaternion ) ) {

					const step = speed * delta;
					mesh.quaternion.rotateTowards( targetQuaternion, step );

				}

				renderer.render( scene, camera );

			}
   */
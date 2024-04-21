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

  handleConnectElements: (selectedNest: Mesh, newPosition: Vector3) => {
    selectedNest;
    newPosition;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleProjectElementOnPosition: (_selectedNest: Mesh, _selectedMesh: Mesh) =>
    undefined as Vector3 | undefined,
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
      //handleConnectElements(element);
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

  const handleConnectElements = (selectedNest: Mesh, newPosition: Vector3) => {
    if (selectedMesh && selectedNest) {
      rotateSelectedElement(selectedMesh.object, selectedNest);
      //connectSelectedElementToTheSelectedNest(selectedNest);
      moveElementToPositionAndConnect(selectedMesh.object, newPosition);
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
  //!!! Find way to rotate
  const rotateSelectedElement = (selectedMesh: Mesh, nest: Mesh) => {
    selectedMesh.rotation.set(
      nest.rotation.x,
      nest.rotation.y,
      nest.rotation.z
    );
  };

  const handleProjectElementOnPosition = (
    selectedNest: Mesh,
    selectedMesh: Mesh
  ) => {
    const projectedPosition = new Vector3();
    const worldToLocalPosition = new Vector3();

    if (selectedMesh && selectedNest) {
      const [connector] = selectedMesh.children.filter((child) => {
        return child.userData.isConnector;
      });

      // Offset between object and its connector
      const connectorOffset = new Vector3();
      connectorOffset.subVectors(selectedMesh.position, connector.position);

      // Compute new position of the object
      //!!selectedNest.worldToLocal(worldToLocalPosition);
      worldToLocalPosition.setFromMatrixPosition(selectedNest.matrixWorld);

      projectedPosition.addVectors(connectorOffset, worldToLocalPosition);
      //!!projectedPosition.subVectors(connectorOffset, worldToLocalPosition);

      return projectedPosition;
    }
  };
  const moveElementToPositionAndConnect = (
    selectedMesh: Mesh,
    newPosition: Vector3
  ) => {
    selectedMesh.translateX(newPosition.x);
    selectedMesh.translateY(newPosition.y);
    selectedMesh.translateZ(newPosition.z);

    builtModelGroup?.add(selectedMesh);

    selectedMesh.userData.isConnected = true;
  };
  // const connectSelectedElementToTheSelectedNest = (selectedNest: Mesh) => {
  //   if (selectedMesh && selectedNest) {
  //     const [connector] = selectedMesh.object.children.filter((child) => {
  //       return child.userData.isConnector;
  //     });

  //     // Offset between object and its connector
  //     const connectorOffset = new Vector3();
  //     connectorOffset.subVectors(
  //       selectedMesh.object.position,
  //       connector.position
  //     );

  //     // Compute new position of the object
  //     const newPosition = new Vector3();
  //     selectedNest.worldToLocal(newPosition);

  //     selectedMesh.object.translateX(connectorOffset.x - newPosition.x);
  //     selectedMesh.object.translateY(connectorOffset.y - newPosition.y);
  //     selectedMesh.object.translateZ(connectorOffset.z - newPosition.z);

  //     builtModelGroup?.add(selectedMesh.object);

  //     selectedMesh.object.userData.isConnected = true;
  //   }
  // };

  const context = {
    selectedMesh,
    freeNestsToConnectElement,
    handleSelectMesh,
    handleResetSelectedMesh,
    handleConnectElements,
    handleProjectElementOnPosition,
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

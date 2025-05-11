import { useDeferredValue, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D } from "three";
import { useThree } from "@react-three/fiber";

type Props = {
  tracksMarkersFilePath: string;
  straightTrackFilePath: string;
  curvedTrackFilePath: string;
};

const Tracks = ({
  tracksMarkersFilePath,
  straightTrackFilePath,
  curvedTrackFilePath,
}: Props) => {
  const tracksMarkersPath = useDeferredValue(tracksMarkersFilePath);
  const straightTrackPath = useDeferredValue(straightTrackFilePath);
  const curvedTrackPath = useDeferredValue(curvedTrackFilePath);
  const { scene: markers } = useGLTF(tracksMarkersPath);
  const { scene: straightTrack } = useGLTF(straightTrackPath);
  const { scene: curveTrack } = useGLTF(curvedTrackPath);

  const { scene } = useThree();

  const markersModel = useMemo(() => {
    return markers.children[0] as Mesh;
  }, [markers]);

  const straightTrackModel = useMemo(() => {
    return straightTrack.children[0];
  }, [straightTrack]);

  const curvedTrackModel = useMemo(() => {
    return curveTrack.children[0];
  }, [curveTrack]);

  useEffect(() => {
    const setRootMarker = scene.getObjectByName("SceneRootMarker");
    if (setRootMarker) {
      setRootMarker.add(markersModel);
    }
  }, [scene, markersModel]);

  const addTracks = (
    markersModel: Mesh,
    straightTrackModel: Object3D,
    curveTrackModel: Object3D
  ) => {
    markersModel.children.forEach((child) => {
      if (child.userData.forTrackType === "Straight") {
        const track = straightTrackModel.clone();
        track.position.copy(child.position);
        track.rotation.copy(child.rotation);
        markersModel.add(track);
      } else {
        const track = curveTrackModel.clone();
        track.position.copy(child.position);
        track.rotation.copy(child.rotation);
        markersModel.add(track);
      }
    });
  };

  useEffect(() => {
    addTracks(markersModel, straightTrackModel, curvedTrackModel);
  }, [markersModel, straightTrackModel, curvedTrackModel]);

  useEffect(() => {
    return () => {
      useGLTF.clear(tracksMarkersPath);
      useGLTF.clear(straightTrackPath);
      useGLTF.clear(curvedTrackPath);
    };
  }, [tracksMarkersPath, straightTrackPath, curvedTrackPath]);

  return <>{markersModel && <primitive object={markersModel} />}</>;
};

export default Tracks;

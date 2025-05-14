import { useCallback, useDeferredValue, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D } from "three";
import { useThree } from "@react-three/fiber";

type Props = {
  tracksMarkersFilePath: string;
  tracksTypesFilePaths: string[];
};

const Tracks = ({ tracksMarkersFilePath, tracksTypesFilePaths }: Props) => {
  const tracksMarkersPath = useDeferredValue(tracksMarkersFilePath);

  const { scene: markers } = useGLTF(tracksMarkersPath);

  const [straightTrack, curveTrack] = useGLTF(tracksTypesFilePaths);

  const { scene } = useThree();

  const markersModel = useMemo(() => {
    return markers.children[0] as Mesh;
  }, [markers]);

  const straightTrackModel = useMemo(() => {
    return straightTrack?.scene?.children[0];
  }, [straightTrack]);

  const curvedTrackModel = useMemo(() => {
    return curveTrack?.scene.children[0];
  }, [curveTrack]);

  useEffect(() => {
    const setRootMarker = scene.getObjectByName("SceneRootMarker");
    if (setRootMarker) {
      setRootMarker.add(markersModel);
    }
  }, [scene, markersModel]);

  const setTracksOnPlace = (
    trackModel: Object3D,
    trackMarker: Object3D,
    markersModel: Object3D
  ) => {
    const track = trackModel.clone();
    track.position.copy(trackMarker.position);
    track.rotation.copy(trackMarker.rotation);
    markersModel.add(track);
    markersModel.remove(trackMarker);
  };

  const addTracks = useCallback(
    (
      markersModel: Mesh,
      straightTrackModel: Object3D,
      curveTrackModel: Object3D
    ) => {
      markersModel.children.forEach((child) => {
        if (child.userData.forTrackType === "Straight" && straightTrackModel) {
          setTracksOnPlace(straightTrackModel, child, markersModel);
        } else if (
          child.userData.forTrackType === "Curved" &&
          curveTrackModel
        ) {
          setTracksOnPlace(curveTrackModel, child, markersModel);
        }
      });
    },
    []
  );

  useEffect(() => {
    addTracks(markersModel, straightTrackModel, curvedTrackModel);
  }, [markersModel, straightTrackModel, curvedTrackModel, addTracks]);

  useEffect(() => {
    return () => {
      useGLTF.clear(tracksMarkersPath);
      tracksTypesFilePaths.forEach((path) => useGLTF.clear(path));
    };
  }, [tracksMarkersPath, tracksTypesFilePaths]);

  return <>{markersModel && <primitive object={markersModel} />}</>;
};

export default Tracks;

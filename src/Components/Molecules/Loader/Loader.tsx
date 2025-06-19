import { useProgress } from "@react-three/drei";
import {
  LoaderIndicator,
  LoaderInSceneHTMLWrapper,
  LoaderProgressBar,
  LoaderWrapper,
} from "./Loader.styles";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <LoaderInSceneHTMLWrapper>
      <LoaderWrapper>
        <span>Loading</span>
        <LoaderIndicator>
          <LoaderProgressBar $progress={progress} />
        </LoaderIndicator>
      </LoaderWrapper>
    </LoaderInSceneHTMLWrapper>
  );
};

export default Loader;

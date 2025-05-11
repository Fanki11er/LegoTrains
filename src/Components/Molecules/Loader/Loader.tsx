import { Html, useProgress } from "@react-three/drei";
import {
  LoaderIndicator,
  LoaderProgressBar,
  LoaderWrapper,
} from "./Loader.styles";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <LoaderWrapper>
        <span>Loading</span>
        <LoaderIndicator>
          <LoaderProgressBar $progress={progress} />
        </LoaderIndicator>
      </LoaderWrapper>
    </Html>
  );
};

export default Loader;

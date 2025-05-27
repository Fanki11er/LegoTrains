import { useThree } from "@react-three/fiber";
import { PropsWithChildren, useLayoutEffect, useRef } from "react";
import { createRoot, Root } from "react-dom/client";
import { HtmlPosition } from "../../../Types/generalTypes";
import { StyledInSceneHTMLWrapper } from "./InSceneHTMLWrapper.styles";

const InSceneHTMLWrapper = ({
  children,
  positionBottom,
  positionLeft,
  positionRight,
  positionTop,
}: PropsWithChildren & HtmlPosition) => {
  const gl = useThree((state) => state.gl);
  const rootRef = useRef<Root | null>(null);

  const target = gl.domElement.parentNode;

  useLayoutEffect(() => {
    if (!target) return;

    const el = document.createElement("div");
    const root = (rootRef.current = createRoot(el));

    target.appendChild(el);

    return () => {
      root.unmount();
      rootRef.current = null;
      target.removeChild(el);
    };
  }, [target]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.render(
      <StyledInSceneHTMLWrapper
        $position={{
          positionBottom,
          positionLeft,
          positionRight,
          positionTop,
        }}
      >
        {children}
      </StyledInSceneHTMLWrapper>
    );
  });

  return null;
};

export default InSceneHTMLWrapper;

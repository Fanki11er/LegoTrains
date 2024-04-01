import { PropsWithChildren, createContext, useState } from "react";
import { Group, Object3DEventMap } from "three";

export const ModelTreeContext = createContext({
  modelTree: null as Group<Object3DEventMap> | null,
  handleLoadModelTree: (tree: Group<Object3DEventMap>) => {
    tree;
  },
});

const ModelTreeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [modelTree, setModelTree] = useState<Group<Object3DEventMap> | null>(
    null
  );

  const handleLoadModelTree = (tree: Group<Object3DEventMap>) => {
    setModelTree(tree);
  };

  const context = {
    modelTree,
    handleLoadModelTree,
  };

  return (
    <ModelTreeContext.Provider value={context}>
      {children}
    </ModelTreeContext.Provider>
  );
};

export default ModelTreeProvider;

import { PropsWithChildren, createContext, useRef } from "react";
import { ElementsData } from "../Classes/ElementsData";

export const ElementsDataContext = createContext({
  elementsData: new ElementsData(),
});

const ElementsDataProvider = (props: PropsWithChildren) => {
  const { current: elementsData } = useRef<ElementsData>(new ElementsData());
  const context = {
    elementsData,
  };
  return (
    <ElementsDataContext.Provider value={context}>
      {props.children}
    </ElementsDataContext.Provider>
  );
};

export default ElementsDataProvider;

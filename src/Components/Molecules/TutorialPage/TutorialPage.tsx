import { PropsWithChildren } from "react";
import { TutorialPageHeader, TutorialPageWrapper } from "./TutorialPage.styles";

type TutorialPageProps = {
  pageNumber: number;
  header: string;
  isTitlePage?: boolean;
  totalPages: number;
};
const TutorialPage = ({
  pageNumber,
  children,
  header,
  totalPages,
}: TutorialPageProps & PropsWithChildren) => {
  return (
    <TutorialPageWrapper>
      <TutorialPageHeader>
        {pageNumber === 0 ? "" : `${pageNumber}/${totalPages} `} {header}
      </TutorialPageHeader>
      {children}
    </TutorialPageWrapper>
  );
};

export default TutorialPage;

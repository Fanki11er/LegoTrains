import styled from "styled-components";
import { theme } from "../../../Theme/theme";

export const TutorialPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  line-height: 1.5;
`;

export const TutorialPageHeader = styled.h3`
  display: grid;
  grid-template-columns: 1fr 25px;
  column-gap: 2px;
  text-align: center;
  margin: 0 0 15px 0;
  color: ${theme.colors.green};
`;

export const TutorialPageText = styled.p`
  color: ${theme.colors.green};
  font-weight: bolder;
`;

export const TutorialPageTextTwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 10px;
`;

export const TutorialPageTextHelperHorizontalImage = styled.img<{
  percentWidth?: number;
}>`
  justify-self: center;
  align-self: center;
  width: ${({ percentWidth }) => (percentWidth ? `${percentWidth}%` : "100%")};
  height: auto;
  margin-top: 15px;
  border-radius: 10px;
`;

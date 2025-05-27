import styled from "styled-components";
import { SelectedItemContextMenuWrapper } from "../../Atoms/SelectedItemContextMenu/SelectedItemContextMenu.styles";
import { theme } from "../../../Theme/theme";
//prettier-ignore
export const FinishedSetCongratulationsBannerWrapper = styled(SelectedItemContextMenuWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  row-gap: 25px;
  padding: 35px;
`;

export const FinishedSetCongratulationsBannerHeader = styled.h2`
  font-size: 24px;
  color: ${theme.colors.green};
`;

export const FinishedSetCongratulationsBannerText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.green};
`;
export const FinishedSetCongratulationsBannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  text-align: center;
`;

export const FinishedSetCongratulationsBannerImage = styled.img`
  width: 100%;
`;

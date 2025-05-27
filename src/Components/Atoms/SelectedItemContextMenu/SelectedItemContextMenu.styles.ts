import styled from "styled-components";
import { theme } from "../../../Theme/theme";

export const SelectedItemContextMenuWrapper = styled.menu`
  min-width: 300px;
  width: fit-content;
  height: fit-content;
  left: 0;
  top: 0;
  position: relative;
  background-color: ${theme.colors.transparentLightBlack};
  border-radius: 15px;
  z-index: 10;
  margin: 0;
  padding: 15px 20px;
  color: ${theme.colors.green};
`;

export const SelectedItemMenuSectionHeader = styled.h2`
  margin: 5px 0;
  text-align: center;
`;

export const SelectedItemMenuSectionHorizontalWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const SelectedItemMenuSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

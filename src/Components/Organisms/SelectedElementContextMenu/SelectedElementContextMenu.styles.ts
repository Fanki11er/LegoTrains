import styled from "styled-components";

export const SelectedElementContextMenuWrapper = styled.menu`
  width: fit-content;
  //max-width: 20%;
  height: fit-content;
  left: 50px;
  top: 50px;
  position: absolute;
  background-color: gray;
  opacity: 0.8;
  z-index: 10;
  margin: 0;
  padding: 15px;
  color: black;
`;
export const SelectedElementMenuSectionHeader = styled.h2`
  margin: 5px 0;
  text-align: center;
`;

export const SelectedElementMenuSectionHorizontalWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const SelectedElementMenuSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

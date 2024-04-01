import styled from "styled-components";

const BaseButton = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const RotateElementContextMenuButton = styled(BaseButton)`
  width: 60px;
  height: 30px;
  background-color: green;
`;

export const ElementContextMenuButton = styled(BaseButton)`
  width: 130px;
  height: 35px;
  background-color: yellow;
`;

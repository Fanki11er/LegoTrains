import styled from "styled-components";

const BaseButton = styled.button`
  outline: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const RotateElementContextMenuButton = styled(BaseButton)`
  display: flex;
  width: 60px;
  height: 30px;
  background-color: green;
`;

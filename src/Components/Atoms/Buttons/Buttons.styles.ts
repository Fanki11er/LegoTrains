import styled from "styled-components";

const BaseButton = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.5s;
  font-weight: 700;
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

export const FinishModelButton = styled(BaseButton)`
  width: 130px;
  height: 35px;
  background-color: #22469e;
  border: 2px solid #22469e;

  &:focus,
  &:hover {
    border: 2px solid #fcec20;
  }
`;

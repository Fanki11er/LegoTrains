import styled from "styled-components";

export const ResetSetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  outline: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  transition: all 0.5s;
  &:hover,
  &:focus {
    transform: scale(1.5) rotate(30deg);
  }
`;

export const ResetSetButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

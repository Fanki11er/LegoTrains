import styled from "styled-components";

export const StyledCheckbox = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 3px solid ${({ theme }) => theme.colors.purple};
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled {
    user-select: none;

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      border: 2px solid ${({ theme }) => theme.colors.green};
      cursor: not-allowed;
    }
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.green};
    border: 2px solid ${({ theme }) => theme.colors.green};
    &:focus {
      background-color: ${({ theme }) => theme.colors.green};
      border: 2px solid ${({ theme }) => theme.colors.green};
    }
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.transparentPurple};
  }

  transition: all 0.5s;
`;

export const ConsentCheckboxLabel = styled.label`
  display: flex;
  margin-top: 1rem;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  width: fit-content;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
`;

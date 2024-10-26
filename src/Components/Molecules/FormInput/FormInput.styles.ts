import { Field } from "formik";
import styled from "styled-components";
import { show } from "../../../Theme/helpers";

type Props = {
  $error?: string;
};

export const StyledFormInput = styled(Field)<Props>`
  width: 100%;
  padding: 0.6rem 1rem;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border: 2px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.transparent};
  transition: all 0.5s;
  border-radius: 15px;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.red : theme.colors.white};

  &:hover,
  &:focus {
    border: 2px solid
      ${({ theme, $error }) =>
        $error ? theme.colors.red : theme.colors.purple};

    color: ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.purple};
    font-weight: 700;
  }
`;

export const StyledFormInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  font-weight: 400;
  row-gap: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledFormInputError = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  border: 2px solid ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.S};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  animation-name: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

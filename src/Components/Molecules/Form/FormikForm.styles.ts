import { Form } from "formik";
import styled from "styled-components";
import { BaseButton } from "../../Atoms/Buttons/Buttons.styles";
import { Link } from "react-router-dom";

export const StyledFormikForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;
  width: fit-content;
  padding: 3rem 3rem;
  max-width: 450px;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1rem;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

export const StyledSubmitButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.transparentPurple};
  width: fit-content;
  padding: 0.6rem 3rem;
  color: ${({ theme }) => theme.colors.white};
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

export const StyledAccountRegistrationFormHeader = styled.h2`
  color: ${({ theme }) => theme.colors.purple};
`;

export const FormRedirectionLink = styled(Link)`
  color: ${({ theme }) => theme.colors.purple};
  border: 2px solid ${({ theme }) => theme.colors.transparent};
  padding: 0.25rem;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: all 0.5s;
  font-size: 1.2rem;
  &:focus,
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.purple};
  }
`;

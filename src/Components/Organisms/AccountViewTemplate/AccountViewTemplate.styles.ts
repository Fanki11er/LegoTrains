import styled from "styled-components";

export const AccountViewTemplateWrapper = styled.div`
  grid-template-columns: 1fr;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr 80px;
  align-items: center;
  justify-items: center;
`;

export const AccountViewTemplateLogoWrapper = styled.div`
  width: fit-content;
  padding: 25px 0 0 25px;
  justify-self: flex-start;
`;

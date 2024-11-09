import styled from "styled-components";
type Props = {
  $show: boolean;
};

export const InSceneProceedStatus = styled.span<Props>`
  width: fit-content;
  position: absolute;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 1rem;
  top: 30px;
  left: 50%;
  margin: 0 auto;
  transition: all 1s;
  transform: ${({ $show }) => ($show ? "translateY(0)" : "translateY(-150%)")}
    translateX(-50%);
`;

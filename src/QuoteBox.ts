import styled from "styled-components";

interface QuoteProps {
  clicked: boolean;
}
export const QuoteBox = styled.div<QuoteProps>`
  position: absolute;
  top: 56px;
  left: 165px;
  max-width: 600px;
  width: 100%;
  display: ${(props) => (props.clicked ? "none" : "flex")};
  justify-content: space-between;
  @media (max-width: 768px) {
    left: 64px;
  }
  @media (max-width: 375px) {
    top: 32px;
    left: 26px;
    max-width: 300px;
    width: 100%;
  }
`;

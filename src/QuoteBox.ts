import styled from "styled-components";

interface QuoteProps {
  clicked: boolean;
}
export const QuoteBox = styled.div<QuoteProps>`
  position: absolute;
  top: 56px;
  left: 165px;
  color: #fff;
  font-size: 18px;
  max-width: 600px;
  width: 100%;
  display: ${(props) => (props.clicked ? "none" : "flex")};
  justify-content: space-between;
`;

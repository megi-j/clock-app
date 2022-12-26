import styled from "styled-components";

interface ButtonProps {
  clicked?: boolean | undefined;
}
export const ButtonDiv = styled.div<ButtonProps>`
  width: 146px;
  height: 56px;
  border-radius: 28px;
  background-color: #fff;
  position: absolute;
  right: 165px;
  bottom: ${(props) => (props.clicked ? "456px" : "56px")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    left: 64px;
    bottom: ${(props) => (props.clicked ? "456px" : "64px")};
  }
  @media (max-width: 375px) {
    width: 115px;
    height: 39px;
    bottom: ${(props) => (props.clicked ? "296px" : "40px")};
  }
`;

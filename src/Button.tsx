import styled from "styled-components";
import "styled-components";
import { ButtonStyle } from "./ButtonStyle";
import { ArrowDiv } from "./ArrowDiv";
import { ButtonDiv } from "./ButtonDiv";
type Props = {
  handleClick: () => void;
  clicked: boolean;
};

export default function Button(props: Props) {
  return (
    <ButtonDiv clicked={props.clicked} onClick={props.handleClick}>
      <ButtonStyle>{props.clicked ? "Less" : "More"}</ButtonStyle>
      <ArrowDiv>
        {props.clicked ? (
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 8L7 2L13 8" stroke="white" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" />
          </svg>
        )}
      </ArrowDiv>
    </ButtonDiv>
  );
}

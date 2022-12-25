import styled from "styled-components";
import refresh from "./images/refresh.png";
import { QuoteAuthor } from "./QuoteAuthor";
import { QuoteBox } from "./QuoteBox";
import { QuoteButton } from "./QuoteButton";
import { QuoteText } from "./QuoteText";

type Props = {
  quote: string;
  getQuote: () => void;
  author: string;
  clicked: boolean;
};

export default function Quote(props: Props) {
  return (
    <QuoteBox clicked={props.clicked}>
      <QuoteInsideBox>
        <QuoteText>{props.quote}</QuoteText>
        <QuoteAuthor>{props.author}</QuoteAuthor>
      </QuoteInsideBox>

      <QuoteButton onClick={props.getQuote}>
        <img src={refresh} alt="refresh" />
      </QuoteButton>
    </QuoteBox>
  );
}

const QuoteInsideBox = styled.div`
  width: 95%;
`;

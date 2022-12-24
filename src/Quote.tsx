import refresh from "./images/refresh.png";

type Props = {
  quote: string;
  getQuote: () => void;
  author: string;
  clicked: boolean;
};

export default function Quote(props: Props) {
  return (
    <div
      className="quote-box"
      style={{ display: props.clicked ? "none" : "block" }}
    >
      <p>{props.quote}</p>
      <h5>{props.author}</h5>
      <button onClick={props.getQuote}>
        <img style={{ background: "none" }} src={refresh} alt="" />
      </button>
    </div>
  );
}

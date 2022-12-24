type Props = {
  handleClick: () => void;
  clicked: boolean;
};

export default function Button(props: Props) {
  return (
    <div
      onClick={props.handleClick}
      className="button-box"
      style={{ bottom: props.clicked ? 456 : 56 }}
    >
      <button className="more-less">{props.clicked ? "Less" : "More"}</button>
      <div className="arrow">
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
      </div>
    </div>
  );
}

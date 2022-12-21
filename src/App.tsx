import { useEffect, useState, useRef } from "react";
import "./App.css";
import Moment from "react-moment";
import photo from "./images/photo.png";

function App() {
  const [time, setTime] = useState<string>();
  const [quote, setQuote] = useState<any>({});
  // const [author, setAuthor] = useState<string>("");
  const firstRander = useRef(true);
  function getTime() {
    fetch("https://worldtimeapi.org/api/ip/")
      .then((response) => response.json())
      .then((result) => {
        setTime(result.datetime);
      });
  }
  useEffect(() => {
    const timeInterval = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  function getQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setQuote(result);
      });
  }
  useEffect(() => {
    if (firstRander.current) {
      getQuote();
      firstRander.current = false;
    }
  }, []);
  return (
    <div className="container">
      <img src={photo} alt="" />
      <div className="quote-box">
        <p>{quote.content}</p>
        <h5>{quote.author}</h5>
      </div>
      <Moment
        style={{
          position: "absolute",
          bottom: 142,
          left: 165,
          fontSize: 200,
          color: "#fff",
          fontWeight: "bold",
        }}
        format="hh:mm"
      >
        {time}
      </Moment>
    </div>
  );
}

export default App;

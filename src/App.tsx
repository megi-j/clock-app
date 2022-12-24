import { useEffect, useState, useRef } from "react";
import "./App.css";
import Moment from "react-moment";
import photo from "./images/photo.png";
import { clockType } from "./types";
import Quote from "./Quote";
import Button from "./Button";
import moment from "moment";

function App() {
  const [time, setTime] = useState<any>({});
  const [quote, setQuote] = useState<any>({});
  const [location, setLocation] = useState<any>({});
  const [clicked, setClicked] = useState<boolean>(false);

  const firstRander = useRef(true);
  function getTime() {
    fetch("https://worldtimeapi.org/api/ip/")
      .then((response) => response.json())
      .then((result) => {
        setTime(result);
        console.log(result);
        // let date = result.datetime.getHours();

        // console.log(date);
        // fetch(
        //   "https://api.ipbase.com/v2/info?apikey=Rd3xVhrVH7Z7tXsMGgOuImfBAujs7jqdZWnhrFH9&ip=" +
        //     `${result.client_ip}`
        // )
        //   .then((response) => response.json())
        //   .then((loc) => {
        //     console.log(loc);
        //     setLocation(loc.location);
        //   });
      });
  }
  useEffect(() => {
    const timeInterval = setInterval(() => {
      getTime();
    }, 5000);
    return () => clearInterval(timeInterval);
  }, []);

  function getQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((result) => {
        setQuote(result);
      });
  }
  useEffect(() => {
    if (firstRander.current) {
      getQuote();
      firstRander.current = false;
    }
  }, []);
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="container">
      <div className="cover"></div>
      <img className="cover-img" src={photo} alt="" />
      <div className="hidden" style={{ display: clicked ? "flex" : "none" }}>
        <div className="left-side">
          <p>CURRENT TIMEZONE</p>
          <h4>{time.timezone}</h4>
          <p>DAY OF THE YEAR</p>
          <h4>{time.day_of_year}</h4>
        </div>
        <div className="right-side">
          <p>DAY OF THE WEEK</p>
          <h4>{time.day_of_week}</h4>
          <p>WEEK NUMBER</p>
          <h4>{time.week_number}</h4>
        </div>
      </div>
      <Quote
        quote={quote.content}
        author={quote.author}
        getQuote={getQuote}
        clicked={clicked}
      />
      <p
        style={{ position: "absolute", left: 165, bottom: 400, color: "#fff" }}
      >
        {/* {time.datetime < 12 && time.datetime > 5
          ? "Good Morning"
          : time.datetime > 13 && time.datetime < 18
          ? "Good Afternoon"
          : time.datetime > 18 && time.datetime < 23
          ? "Good Evening"
          : "good"} */}
      </p>
      <Moment
        style={{
          position: "absolute",
          bottom: clicked ? 500 : 142,
          left: 165,
          fontSize: 200,
          color: "#fff",
          fontWeight: "bold",
        }}
        format="hh:mm a"
      >
        {time.datetime}
      </Moment>
      <Button handleClick={handleClick} clicked={clicked} />
      {/* <h4>{location}</h4> */}
    </div>
  );
}

export default App;

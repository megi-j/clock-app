import { useEffect, useState, useRef } from "react";
import "./App.css";
import Moment from "react-moment";
import photo from "./images/photo.png";
import { clockType } from "./types";
import Quote from "./Quote";
import Button from "./Button";
import moment from "moment";
import { Container } from "./Container";
import { Cover } from "./Cover";
import { Hidden } from "./Hidden";
import styled from "styled-components";
import { TimeZoneBox } from "./TimeZoneBox";
import { TimeZoneText } from "./TimeZoneText";
import { WeekInfo } from "./WeekInfo";
import { TimeZoneInfo } from "./TimeZoneInfo";
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
    <Container>
      <Cover></Cover>
      <CoverImg src={photo} alt="cover" />
      <Hidden clicked={clicked}>
        <TimeZoneBox>
          <TimeZoneText>CURRENT TIMEZONE</TimeZoneText>
          <TimeZoneInfo>{time.timezone}</TimeZoneInfo>
          <TimeZoneText>DAY OF THE YEAR</TimeZoneText>
          <TimeZoneInfo>{time.day_of_year}</TimeZoneInfo>
        </TimeZoneBox>
        <WeekInfo>
          <TimeZoneText>DAY OF THE WEEK</TimeZoneText>
          <TimeZoneInfo>{time.day_of_week}</TimeZoneInfo>
          <TimeZoneText>WEEK NUMBER</TimeZoneText>
          <TimeZoneInfo>{time.week_number}</TimeZoneInfo>
        </WeekInfo>
      </Hidden>
      <Quote
        quote={quote.content}
        author={quote.author}
        getQuote={getQuote}
        clicked={clicked}
      />
      {/* <p
        style={{ position: "absolute", left: 165, bottom: 400, color: "#fff" }}
      > */}
      {/* {time.datetime < 12 && time.datetime > 5
          ? "Good Morning"
          : time.datetime > 13 && time.datetime < 18
          ? "Good Afternoon"
          : time.datetime > 18 && time.datetime < 23
          ? "Good Evening"
          : "good"} */}
      {/* </p> */}
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
    </Container>
  );
}

export default App;

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
`;

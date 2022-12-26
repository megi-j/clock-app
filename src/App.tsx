import { useEffect, useState, useRef } from "react";
import "./App.css";
import Moment from "react-moment";
import photo from "./images/photo.png";
import { ClockType, QuoteType } from "./types";
import Quote from "./Quote";
import Button from "./Button";
import moment from "moment";
import { Container } from "./Container";
import { Cover } from "./Cover";
import { Hidden } from "./Hidden";
import styled, { createGlobalStyle } from "styled-components";
import { TimeZoneBox } from "./TimeZoneBox";
import { TimeZoneText } from "./TimeZoneText";
import { WeekInfo } from "./WeekInfo";
import { TimeZoneInfo } from "./TimeZoneInfo";
import { Helmet } from "react-helmet";
const GlobalStyles = createGlobalStyle`
  *{
    font-family: "Inter";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
function App() {
  const [time, setTime] = useState<ClockType | undefined>(undefined);
  const [quote, setQuote] = useState<QuoteType | undefined>(undefined);
  // const [location, setLocation] = useState<any>({});
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
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Cover></Cover>
      <CoverImg src={photo} alt="cover" />
      <Hidden clicked={clicked}>
        <TimeZoneBox>
          <TimeZoneText>CURRENT TIMEZONE</TimeZoneText>
          <TimeZoneInfo>{time ? time.timezone : null}</TimeZoneInfo>
          <TimeZoneText>DAY OF THE YEAR</TimeZoneText>
          <TimeZoneInfo>{time ? time.day_of_year : null}</TimeZoneInfo>
        </TimeZoneBox>
        <WeekInfo>
          <TimeZoneText>DAY OF THE WEEK</TimeZoneText>
          <TimeZoneInfo>{time ? time.day_of_week : null}</TimeZoneInfo>
          <TimeZoneText>WEEK NUMBER</TimeZoneText>
          <TimeZoneInfo>{time ? time.week_number : null}</TimeZoneInfo>
        </WeekInfo>
      </Hidden>
      <Quote
        quote={quote && quote.content}
        author={quote && quote.author}
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
          fontWeight: "700",
          letterSpacing: "-5px",
        }}
        format="hh:mm a"
      >
        {time && time.datetime}
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

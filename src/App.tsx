import { useEffect, useState, useRef } from "react";
import "./App.css";
import Moment from "react-moment";
import photo from "./images/photo.png";
import cover from "./images/cover-tablet.png";
import coverMob from "./images/coverMob.png";
import { ClockType, QuoteType } from "./types";
import Quote from "./Quote";
import Button from "./Button";
import moment from "moment";
import { Container } from "./Container";
import { Cover } from "./Cover";
import { Hidden } from "./Hidden";
import styled, { createGlobalStyle } from "styled-components";
import { CurrentTimeZone } from "./CurrentTimeZone";
import { TimeZoneText } from "./TimeZoneText";
import { WeekInfo } from "./WeekInfo";
import { TimeZoneInfo } from "./TimeZoneInfo";
import { Helmet } from "react-helmet";
import { TimeZoneBox } from "./TimeZoneBox";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
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
  const [location, setLocation] = useState<any>(undefined);
  const [clicked, setClicked] = useState<boolean>(false);
  const [resolution, setResolution] = useState<number | undefined>(undefined);

  const firstRander = useRef(true);
  useEffect(() => {
    function handleResize() {
      setResolution(window.innerWidth);
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      console.log(resolution);
    }

    window.addEventListener("resize", handleResize);
  });
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
        //მიწერს რო თვიური ლიმიტი ამოვწურე ,როგორც ვნახე 21 იანვარს უნდა განახლდეს და ისევ შევძლებ ახლიდან ინფოს წამოღებას,შესაბამისად შევძლებ შეცვლას ფოტოსი და მისალმების წარწერის
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
  function calc() {
    if (resolution === undefined || resolution > 1440) {
      return 200;
    } else if (resolution < 1440 && resolution > 768) {
      return 200;
    } else if (resolution < 768 && resolution > 375) {
      return 175;
    } else if (resolution < 375) {
      return 100;
    }
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
      <CoverImgDesktop src={photo} alt="cover" />
      <CoverImgTablet src={cover} alt="cover" />
      <CoverImgMobile src={coverMob} alt="cover" />
      <Hidden clicked={clicked}>
        <TimeZoneBox>
          <CurrentTimeZone>
            <TimeZoneText>CURRENT TIMEZONE</TimeZoneText>
            <TimeZoneInfo>{time && time.timezone}</TimeZoneInfo>
          </CurrentTimeZone>
          <CurrentTimeZone>
            <TimeZoneText>DAY OF THE YEAR</TimeZoneText>
            <TimeZoneInfo>{time && time.day_of_year}</TimeZoneInfo>
          </CurrentTimeZone>
        </TimeZoneBox>
        <TimeZoneBox>
          <WeekInfo>
            <TimeZoneText>DAY OF THE WEEK</TimeZoneText>
            <TimeZoneInfo>{time && time.day_of_week}</TimeZoneInfo>
          </WeekInfo>
          <WeekInfo>
            <TimeZoneText>WEEK NUMBER</TimeZoneText>
            <TimeZoneInfo>{time && time.week_number}</TimeZoneInfo>
          </WeekInfo>
        </TimeZoneBox>
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
          fontSize: calc(),
          color: "#fff",
          fontWeight: "700",
          letterSpacing: "-5px",
        }}
        format="hh:mm a"
      >
        {time && time.datetime}
      </Moment>
      <Button handleClick={handleClick} clicked={clicked} />
      <h4>{location}</h4>
    </Container>
  );
}

export default App;
// const timeStyle = {
//   position: "absolute",
//   bottom: clicked ? 500 : 142,
//   left: 165,
//   fontSize: 40,
//   color: "#fff",
//   fontWeight: "700",
//   letterSpacing: "-5px",
// };
const CoverImgDesktop = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
const CoverImgTablet = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const CoverImgMobile = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media (max-width: 375px) {
    display: block;
  }
`;

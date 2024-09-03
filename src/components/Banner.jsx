import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import creative from "../assets/img/creative.png";
import threearrow from "../assets/img/threearrow2.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Hovering } from "./Hovering";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      const hour = dateObject.getHours();
      const minute = dateObject.getMinutes();
      const second = dateObject.getSeconds();

      const currentTime = hour + " : " + minute + " : " + second;

      setTime(currentTime);
    }, 1000);
  }, []);

  return (
    <section className="banner" id="home">
      <Hovering left="80" top="45" img="p0" widthPara="80px"></Hovering>
      <Hovering left="85" top="45" img="p1" widthPara="80px"></Hovering>
      <Hovering left="80" top="0" img="p2" widthPara="80px"></Hovering>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="textContainer">
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/* <span className="tagline">Welcome to my Portfolio</span> */}
                    <h1>
                      {`I'm Hung, a `}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <img
                      className="creativeImg"
                      src={creative}
                      alt="Creative Img"
                    />
                    <div className="smallTextWrapper d-flex">
                      <div>
                        <p>{time}</p>
                        <hr className="myHr"></hr>
                        <p>"I bring idea out of your head"</p>
                      </div>
                      <a href="#connect" style={{textDecoration:"none", color:"white"}}>
                        <button onClick={() => console.log("connect")}>
                          Let's Connect <ArrowRightCircle size={25} />
                        </button>
                      </a>
                    </div>
                    <a
                      className="explorebox bg-black border border-2 border-white d-flex justify-content-center"
                      href="#work"
                    >
                      <div>
                        <h2>EXPLORE</h2>
                        <p>
                          Explore the recent innovative and exceptional digital
                          experiences
                        </p>
                      </div>
                      <img src={threearrow} alt="Three arrow Img"></img>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="bannerImgWrapper">
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      className="bannerImg"
                      src={headerImg}
                      alt="Header Img"
                    />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

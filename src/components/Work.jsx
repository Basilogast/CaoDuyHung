import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WorkCard } from "./WorkCard";
import firstquote from "../assets/img/firstquote.svg";
import secondquote from "../assets/img/secondquote.svg";
import {Hovering} from "./Hovering";
import { useState } from "react";
import {cards} from "./constant/index";
export const Work = () => {
  const [projectNameState, setProjectName] = useState("");
  const [projectDesState, setProjectDes] = useState("Hover over the beside project to see descriptions");
  function funcHandleHover ( index) {
    setProjectName(cards[index].projectName);
    setProjectDes(cards[index].description);
  }

  return (
    <section className="work" id="work">
      <Container>
        <Hovering left="5" top="30" img="p1" widthPara="80px"></Hovering>
        <Hovering left="80" top="10" img="p0" widthPara="80px"></Hovering>
        <Hovering left="30" top="75" img="p2" widthPara="80px"></Hovering>
        <Row className="aligh-items-center ">
          <Col xs={12} md={5} xl={5} className="d-flex flex-column">
            <p>What's the project about?</p>
            <div className="d-flex flex-column justify-content-between flex-grow-1">
              <div className="workDescription">
                <div className="imgWrapper">
                  <img src={firstquote} alt="quote" />
                </div>
                {projectDesState}
                <div className="imgWrapper float-end">
                  <img src={secondquote} alt="quote" />
                </div>
              </div>
              <div className="workName d-flex justify-content-center align-items-center flex-grow-1">
                <div className="workNameContent ATGlitch" data-text={projectNameState}>
                 {projectNameState}
                </div>
              </div>
            </div>
            {/* <div className="fuzzy-overlay"></div> */}
          </Col>
          <Col xs={12} md={7} xl={7}>
            <p>Recent Project</p>
            <div className="workTable">
              {cards.map((card, index) => {
                return <WorkCard key={index} {...card} handleHover={()=>{funcHandleHover(index)}}/>;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

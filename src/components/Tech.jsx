import React from "react";
import {Container} from "react-bootstrap";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "./hoc";
import { technologies } from "./constant/index";

const Tech = () => {
  return (
    <section className="d-flex flex-column">
      <Container>
        <p>Design and develop with the latest technology</p>
        <div className="tech d-flex flex-row flex-wrap justify-content-center gap-10">
          {technologies.map((technology) => (
            <div className="techIcon w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionWrapper(Tech, "");

import React from "react";
import p0 from "../assets/img/1.jpg"
export const WorkCard = ({ projectName, number, link, description, img, handleHover }) => {
  return (
    <div className="workcard">
      <div className="d-flex align-items-center" data-fx="8" onMouseOver={handleHover}>
        <a className="d-flex justify-content-between d-block" data-img={img} href={link}>
          <p>{projectName}</p>
          <p>{number}</p>
        </a>
      </div>
      <hr className="myHr"></hr>
    </div>
  );
};

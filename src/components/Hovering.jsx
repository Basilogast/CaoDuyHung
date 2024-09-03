import React from 'react';
import p0 from "../assets/img/hovering/10.svg";
import p1 from "../assets/img/hovering/11.svg";
import p2 from "../assets/img/hovering/12.svg";

export const Hovering = ({key, left, top, img, widthPara}) =>{
    const classN = "hovering position-absolute";
    const styleN = {
        width: widthPara,
        left: left +"%",
        top: top +"%",
    }
    let imgSrc="";
    if (img == "p0") {
        imgSrc = p0;
    } else if (img == "p1") {
        imgSrc = p1;
    }else if (img == "p2") {
        imgSrc = p2;
    } else imgSrc ="";
    return (
        <div className = {classN} style={styleN}>
            <img src={imgSrc} alt="hovering"/>
        </div>
    )
}
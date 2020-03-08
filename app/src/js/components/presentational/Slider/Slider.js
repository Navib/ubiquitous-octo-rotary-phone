import React, { useState } from "react";
import Slider from "react-slick";
import classnames from "classnames";
import { renderMultipleSlide, isNext } from "./util";
import Slide from "./Slide/Slide";
import BioSlide from "./BioSlide/BioSlide";
import { projects } from "./Slide/projects";

import styles from "./Slider.module.scss";

import "./Slider.scss";

const Arrow = ({ className, style, onClick, direction, cb, isBorder }) => {
  const borderStyle = (isBord, direct) => {
    if (isBord === "right" && direct === "right") return true;
    else if (isBord === "left" && direct === "left") return true;
    return false;
  };
  return (
    <div
      className={classnames(className, direction, {
        border: borderStyle(isBorder, direction)
      })}
      style={{ ...style, display: "block" }}
      onClick={() => cb(onClick, direction)}
    >
      <i className={`chevron ${direction} icon ${styles.white}`}></i>
    </div>
  );
};

const CenterMode = () => {
  const [isBorder, setBorder] = useState(null);

  const cb = (click, point) => {
    if (point === "right") {
      setBorder("right");
    } else {
      setBorder("left");
    }
    click();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    draggable: true,
    centerPadding: "100px",
    //responsive: [{breakpoint: 1000, settings: {slidesToShow: 2}}],
    slidesToShow: 3,
    speed: 900,
    nextArrow: <Arrow direction={"right"} cb={cb} isBorder={isBorder} />,
    prevArrow: <Arrow direction={"left"} cb={cb} isBorder={isBorder} />
  };

  return (
    <div className={styles.centerMode}>
      <Slider {...settings}>
        <BioSlide />
        {renderMultipleSlide(Slide, null, projects)}
      </Slider>
    </div>
  );
};

export default CenterMode;

import React from "react";
import Slider from "react-slick";
import { renderMultipleSlide } from "./Slide/util";
import Slide from "./Slide/Slide";

import "./Slider.scss";

const Arrow = text => {
  return <div>{text}</div>;
};

const CenterMode = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    //responsive: [{breakpoint: 1000, settings: {slidesToShow: 2}}],
    slidesToShow: 3,
    speed: 900,
    nextArrow: Arrow("Next"),
    prevArrow: Arrow("Previous")
  };

  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>{renderMultipleSlide(Slide, 4)}</Slider>
    </div>
  );
};

export default CenterMode;

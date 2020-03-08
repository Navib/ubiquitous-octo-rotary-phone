import React from "react";

export const renderMultipleSlide = (Component, n) => {
  const num = Array(n).fill(0);
  console.log("util", num);
  return num.map((el, indx) => {
    return <Component text={`Card ${indx}`} key={indx} />;
  });
};

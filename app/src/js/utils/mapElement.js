import React from "react";

export const mapElement = (Component, size = 1) => {
  let array;
  if (typeof size === "object") array = size;
  else array = [...Array(size)];
  return array.map((un, i) => <Component key={i} itemNumber={i + 1} />);
};

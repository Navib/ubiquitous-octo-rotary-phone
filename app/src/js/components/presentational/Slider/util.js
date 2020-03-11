import React from "react";

export const renderMultipleSlide = (Component, n, data) => {
  if (data) {
    return data.map((obj, indx) => {
      const {
        project,
        focus,
        summary,
        results,
        isProductionalized,
        media
      } = obj;
      return (
        <Component
          key={indx}
          project={project}
          focus={focus}
          summary={summary}
          results={results}
          isProductionalized={isProductionalized}
          media={media}
        />
      );
    });
  }
  const num = Array(n).fill(0);
  return num.map((el, indx) => {
    return <Component text={`Card ${indx}`} key={indx} />;
  });
};

export const isNext = (oldIndex, newIndex) => {
  console.log(oldIndex, newIndex);
  if (oldIndex < newIndex) return true;
  return false;
};

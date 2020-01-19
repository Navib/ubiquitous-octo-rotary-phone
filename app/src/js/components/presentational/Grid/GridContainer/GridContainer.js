import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const propTypes = {
  display: PropTypes.oneOf(["grid", "inline-grid", ""]),
  gridGap: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    "space-evenly",
    "space-around",
    "space-between",
    "center",
    "start",
    "end",
    ""
  ]),
  alignContent: PropTypes.oneOf([
    "space-evenly",
    "space-around",
    "space-between",
    "center",
    "start",
    "end",
    ""
  ]),
  gridTemplateAreas: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
};
const defaultProps = {
  display: "grid",
  gridGap: "",
  gridTemplateColumns: "",
  gridTemplateRows: "",
  justifyContent: "",
  alignContent: "",
  gridTemplateAreas: ""
};

const GridContainer = ({
  display,
  className,
  children,
  gridGap,
  gridTemplateColumns,
  gridTemplateRows,
  justifyContent,
  alignContent,
  gridTemplateAreas
}) => {
  const myStyle = {
    display: display,
    gridGap: gridGap,
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,
    justifyContent: justifyContent,
    alignContent: alignContent,
    gridTemplateAreas: gridTemplateAreas
  };
  return (
    <div style={myStyle} className={classnames(className, "grid-container")}>
      {children}
    </div>
  );
};

GridContainer.propTypes = propTypes;
GridContainer.defaultProps = defaultProps;

export default GridContainer;

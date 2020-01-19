import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  gridArea: PropTypes.string,
  gridColumnStart: PropTypes.string,
  gridColumnEnd: PropTypes.string,
  griRowStart: PropTypes.string,
  gridRowEnd: PropTypes.string
};
const defaultProps = {
  gridArea: "",
  gridColumnStart: "",
  gridColumnEnd: "",
  griRowStart: "",
  gridRowEnd: ""
};

const GridItem = ({
  children,
  className,
  gridArea,
  gridColumnStart,
  gridColumnEnd,
  griRowStart,
  gridRowEnd
}) => {
  const myStyle = {
    gridColumnStart: gridColumnStart,
    gridColumnEnd: gridColumnEnd,
    griRowStart: griRowStart,
    gridRowEnd: gridRowEnd,
    gridArea: gridArea
  };
  console.log(myStyle);
  return (
    <div className={classnames(className, "grid-item")} style={myStyle}>
      {children}
    </div>
  );
};

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;

export default GridItem;

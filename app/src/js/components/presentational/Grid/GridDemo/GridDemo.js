import React from "react";
import GridContainer from "../GridContainer/GridContainer";
import GridItem from "../GridItem/GridItem";
import { mapElement } from "../../../../utils/mapElement";
import styles from "./GridDemo.module.css";

const GridDemo = ({ children }) => {
  const gridArea = ["header", "main", "footer"];
  const GridItemNew = ({ itemNumber }) => (
    <GridItem className={styles.gridItem} gridArea={gridArea[itemNumber - 1]}>
      {itemNumber}
    </GridItem>
  );
  const RenderGridItems = () => {
    const gridArea = [
      "header header header header",
      ".      main   main   .     ",
      "footer footer footer footer"
    ];
    return mapElement(GridItemNew, gridArea);
  };
  return (
    <GridContainer
      gridTemplateAreas={
        '"header header header header" \
                      ".      main   main   .     " \
                      "footer footer footer footer"'
      }
      gridGap={"2em 1em"}
    >
      {RenderGridItems()}
    </GridContainer>
  );
};

export default GridDemo;

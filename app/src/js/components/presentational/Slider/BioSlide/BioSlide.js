import React, { useState } from "react";
import classnames from "classnames";

import styles from "./BioSlide.module.scss";

const BioSlide = () => {
  const [isMouseOver, setHover] = useState(null);

  const handleMousEnter = () => {
    setHover(true);
  };
  const handleMousLeave = () => {
    setHover(false);
  };

  return (
    <div className="ui special cards">
      <div className="card">
        <div
          className={classnames("blurring dimmable image", {
            dimmed: isMouseOver
          })}
          onMouseEnter={() => handleMousEnter()}
          onMouseLeave={() => handleMousLeave()}
        >
          <div
            id="flex-box"
            className={classnames("ui dimmer transition", styles.flex, {
              "hidden flex": !isMouseOver,
              "visible active flex": isMouseOver
            })}
          >
            <div className="content">
              <div className="center">
                <div className="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img src="https://via.placeholder.com/250" />
        </div>
        <div class="content">
          <div class="header">Ivan Baena</div>
          <div class="meta">
            <a>Front End Developer</a>
          </div>
          <div class="description">
            Ivan is an Front End Developer with a focus on React, Redux,
            Webpack, & Node. Ivan is currently living in the greater New York
            City area.
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="react icon"></i>
            <i className="js square icon"></i>
            <i className="node js icon"></i>
            <i className="html5 icon"></i>
            <i className="css3 icon"></i>
            <i className="sass icon"></i>
            <i className="github icon"></i>
            <i className="npm icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BioSlide;

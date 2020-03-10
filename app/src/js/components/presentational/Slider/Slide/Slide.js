import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import DemoPortal from "../../Portal/DemoPortal/DemoPortal";
import Media from "../../Media/Media";

import styles from "./Slide.module.scss";

const propTypes = {
  text: PropTypes.string,
  project: PropTypes.string,
  focus: PropTypes.string,
  summary: PropTypes.string,
  results: PropTypes.string,
  isProductionalized: PropTypes.bool,
  media: PropTypes.any
};

const Slide = ({
  text,
  project,
  focus,
  summary,
  results,
  isProductionalized,
  media
}) => {
  const [demoClicked, setClicked] = useState(false);

  const toggleDemo = () => {
    setClicked(!demoClicked);
  };

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{text || project}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">{focus}</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">{summary}</div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">{results}</div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                Code is live:
                {isProductionalized ? (
                  <i
                    className={classnames(
                      styles.green,
                      "check circle outline icon",
                      styles.icon
                    )}
                  ></i>
                ) : (
                  <i
                    className={classnames(
                      styles.red,
                      "times circle outline icon",
                      styles.icon
                    )}
                  ></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="extra content">
        <button className="ui button full-width" onClick={() => toggleDemo()}>
          Demo
        </button>
        {demoClicked ? (
          <DemoPortal>
            <Media closePortal={toggleDemo} media={media} />
          </DemoPortal>
        ) : null}
      </div>
    </div>
  );
};
Slide.propTypes = propTypes;
export default Slide;

import React from "react";
import classnames from "classnames";

import styles from "./Media.module.scss";

const Media = ({ closePortal, media }) => {
  return (
    <div class={classnames(styles.centerScreen, "ui two column centered grid")}>
      <div class="column">
        Overlay
        <button
          className={classnames(styles.exitButton, "ui button full-width")}
          onClick={closePortal}
        >
          exit
        </button>
        <div className="ui embed">
          <iframe src={media} placeholder="/images/bear-waving.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Media;

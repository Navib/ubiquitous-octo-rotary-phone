import React from "react";

const Slide = ({ text }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{text}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Activity</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                <a>Helen Troy</a> added two pictures
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="extra content">
        <button className="ui button">Join Project</button>
      </div>
    </div>
  );
};

export default Slide;

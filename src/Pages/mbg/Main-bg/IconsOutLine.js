import React, { Component } from "react";

class IconsOutLine extends Component {
  render() {
    return (
      <div className="iconsOutline">
        <div className="icons">
          <img
            src="./images/mbg/home.png"
            className="homeIcon"
            alt="홈아이콘"
          />
          <img
            src="./images/mbg/airplane.png"
            className="messageIcon"
            alt="메시지아이콘"
          />
          <img
            src="./images/mbg/compass.png"
            className="exploreIcon"
            alt="콤파스아이콘"
          />
          <img
            src="./images/mbg/heart.png"
            className="activityIcon"
            alt="하트아이콘"
          />
          <img
            src="./images/mbg/IMG_20201112_204911_512.jpg"
            className="profileIcon"
            alt="아이콘프로필"
          />
        </div>
      </div>
    );
  }
}

export default IconsOutLine;

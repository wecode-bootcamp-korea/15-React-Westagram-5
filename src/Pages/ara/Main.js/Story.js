import React from "react";
import "./Story.scss";

const STORYINFO = [
  {
    id: 0,
    imageURL: "../../../images/aramcho/dusdusdus555.png",
    userName: "dusdusdus555",
  },
  {
    id: 1,
    imageURL: "../../../images/aramcho/jingddo.png",
    userName: "jingddo",
  },
  {
    id: 2,
    imageURL: "../../../images/aramcho/samkim2244.png",
    userName: "samkim2244",
  },
  {
    id: 3,
    imageURL: "../../../images/aramcho/hyunegg_u.png",
    userName: "hyunegg_u",
  },
  {
    id: 4,
    imageURL: "../../../images/aramcho/h_gyeol24.png",
    userName: "h_gyeol24",
  },
  {
    id: 5,
    imageURL: "../../../images/aramcho/yechan1995.png",
    userName: "yechan1995",
  },
  {
    id: 6,
    imageURL: "../../../images/aramcho/minha_0112.png",
    userName: "minha_0112",
  },
];

class Story extends React.Component {
  render() {
    return (
      <>
        <div className="Story">
          {STORYINFO.map((el) => {
            return (
              <div className="storyWrap">
                <div className="storyElement">
                  <img className="storyPic" src={el.imageURL} />
                </div>
                <div className="storyUserName">{el.userName}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Story;

import React from "react";
import "./Feed.scss";
import Comment from "./Comment.js";

const FEEDINFO = [
  {
    id: 0,
    profileURL: "../../../images/aramcho/samkim2244.png",
    userName: "samkim2244",
    location: "Edmond, OK",
    pictureURL: "../../../images/aramcho/sky2.jpg",
    likeCount: "좋아요 27개",
    picDescription: "bluemoon 땡기는 저녁",
    postedDate: "3 days ago",
  },
  {
    id: 1,
    profileURL: "../../../images/aramcho/jingddo.png",
    userName: "jingddo",
    location: "Oklahoma City",
    pictureURL: "../../../images/aramcho/sky3.jpg",
    likeCount: "좋아요 51개",
    picDescription: "purple sunset",
    postedDate: "5 days ago",
  },
  {
    id: 2,
    profileURL: "../../../images/aramcho/minha_0112.png",
    userName: "minha_0112",
    location: "Del City, OK",
    pictureURL: "../../../images/aramcho/sky4.jpg",
    likeCount: "좋아요 33개",
    picDescription: "typical oklahoma sky",
    postedDate: "1 week ago",
  },
];
class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "aglioolive0206",
    };
  }
  render() {
    return (
      <>
        <div className="Feed">
          <div className="mFdTop">
            <div className="postUserPic">
              <img
                className="postUPDisplay"
                alt="profilePic"
                src="../../../images/aramcho/myProfile.png"
              />
            </div>
            <div className="postInfo">
              <div className="postedUser">aglioolive0206</div>
              <div className="postedLocation"> Oklahoma</div>
            </div>
            <div className="postedPicMenu">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="mFdPic">
            <img src="../../../images/aramcho/sky1.jpg" />
          </div>
          <div className="mFdLikeSec">
            <div className="mFdLkIcon1">
              <i className="far fa-heart"></i>
            </div>
            <div className="mFdLkIcon2">
              <i className="far fa-comment"></i>
            </div>
            <div className="mFdLkIcon3">
              <i id="icon2" className="fas fa-paper-plane"></i>
            </div>
            <div className="mFdLkIcon4">
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="mFdLkIcon5">
              <i className="far fa-bookmark"></i>
            </div>
          </div>
          <div className="mFdPplLiked">좋아요 20개</div>
          <div className="mFdContent1">
            aglioolive0206
            <div className="mFdContent2">&nbsp; weestagram project..</div>
          </div>
          <div className="mFdComment">
            yebinchoe2954
            <div className="mFdContent2">&nbsp; doing good!</div>
            <i className="far fa-heart"></i>
          </div>
          <Comment
            currentUser={this.state.user}
            postedDate="2 days ago"
          ></Comment>
        </div>
        {FEEDINFO.map((el) => {
          return (
            <div className="Feed">
              <div className="mFdTop">
                <div className="postUserPic">
                  <img
                    className="postUPDisplay"
                    alt="profilePic"
                    src={el.profileURL}
                  />
                </div>
                <div className="postInfo">
                  <div className="postedUser">{el.userName}</div>
                  <div className="postedLocation"> {el.location}</div>
                </div>
                <div className="postedPicMenu">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <div className="mFdPic">
                <img src={el.pictureURL} />
              </div>
              <div className="mFdLikeSec">
                <div className="mFdLkIcon1">
                  <i className="far fa-heart"></i>
                </div>
                <div className="mFdLkIcon2">
                  <i className="far fa-comment"></i>
                </div>
                <div className="mFdLkIcon3">
                  <i id="icon2" className="fas fa-paper-plane"></i>
                </div>
                <div className="mFdLkIcon4">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="mFdLkIcon5">
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
              <div className="mFdPplLiked">{el.likeCount}</div>
              <div className="mFdContent1">
                {el.userName}
                <div className="mFdContent2">&nbsp; {el.picDescription}</div>
              </div>
              {/* <div className="mFdDate">{el.postedDate}</div> */}
              <Comment
                postedDate={el.postedDate}
                currentUser={this.state.user}
              ></Comment>
            </div>
          );
        })}
      </>
    );
  }
}
export default Feed;

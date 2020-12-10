import React, { Component } from "react";
import "./Main.scss";
import Comment from "../../../Comment";
import IconsOutLine from "./IconsOutLine";
import StoryBar from "./StoryBar";
import RecommendUserList from "./RecommendUserList";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      commentList: [],
    };
  }

  pushComment = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = () => {
    const { commentList, value } = this.state;
    this.setState({
      commentList: commentList.concat([value]),
      value: "",
    });
  };

  addCommentEnter = (e) => {
    if (e.key === "Enter") {
      this.addComment();
    }
  };

  render() {
    const activateBtn = this.state.value.length > 0;

    return (
      <>
        <div className="mainPage">
          <div className="mainBar">
            <div className="barOutline">
              <div className="logoOutline">
                <img
                  src="./images/mbg/735145cfe0a4.png"
                  className="logo"
                  alt="로고 이미지"
                />
              </div>
              <div className="searchBarOutline">
                <input
                  className="searchButton"
                  placeholder="검색"
                  onfocus="this.placeholder=''"
                />
              </div>
              <IconsOutLine />
            </div>
          </div>
          <div className="outLine">
            <div className="mainContents">
              <StoryBar />

              <div className="feedContents">
                <div className="profileHeader">
                  <div className="feedUploader">
                    <img
                      src="/images/mbg/hosico.jpg"
                      className="uploaderPhoto"
                      alt="피드 업로더"
                    />
                    <div className="uploaderOutline">
                      <p>hosico_cat</p>
                      <button type="button">
                        <img
                          src="./images/mbg/more.png"
                          className="moreInfo"
                          alt="더보기아이콘"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src="./images/mbg/hosico_cat_20201113_1.png"
                  className="feedPhoto"
                  alt="피드 사진"
                />
                <div className="reactionContents">
                  <div className="reactionBar">
                    <div className="reactionIcons">
                      <img
                        src="./images/mbg/heart.png"
                        className="activityIcon"
                        alt="하트 아이콘"
                      />
                      <img
                        src="./images/mbg/chat-bubble.png"
                        className="replyIcon"
                        alt="댓글 아이콘"
                      />
                      <img
                        src="./images/mbg/airplane.png"
                        className="messageIcon"
                        alt="메시지 아이콘"
                      />
                    </div>
                    <img
                      src="./images/mbg/free-icon-tag-1415025.png"
                      className="bookmarkIcon"
                      alt="북마크 아이콘"
                    />
                  </div>
                  <div className="likeNumberBar">
                    <button className="likePeople">
                      {" 좋아요"}
                      <span className="likeNumber"> 456</span>개
                    </button>
                  </div>
                  <div className="textBar">
                    <div className="writersComment">
                      <a href="https://www.instagram.com/" className="userId">
                        hosico_cat
                      </a>
                      <span className="userComment"> I love cat!</span>
                    </div>
                    <div className="totalReply">
                      댓글
                      <span className="countReply"> 3</span>개 모두 보기
                    </div>
                    <ul>
                      <li>
                        <Comment />

                        {this.state.commentList.map((comm, idx) => {
                          return (
                            <li key={idx}>
                              <a
                                href="https://www.instagram.com/"
                                className="userId"
                              >
                                {"moonvenn_dev "}
                              </a>
                              {comm}
                            </li>
                          );
                        })}
                        <div className="updateTime"> 3시간 전 </div>
                        <div className="inputBar">
                          <input
                            type="text"
                            id="createComment"
                            placeholder="댓글 달기..."
                            onfocus="this.placeholder=''"
                            onChange={this.pushComment}
                            onKeyPress={this.addCommentEnter}
                            value={this.state.value}
                          />
                          <button
                            id="push"
                            className={activateBtn ? "active" : ""}
                            onClick={this.addComment}
                          >
                            게시
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sideBar">
              <div className="Bio">
                <div className="profile">
                  <img
                    src="./images/mbg/IMG_20201112_204911_512.jpg"
                    className="profilePhoto"
                    alt="profile"
                  />
                  <div className="nameOutline">
                    <div className="profileName">
                      <a href="https://www.instagram.com/">moonvenn_dev</a>
                    </div>
                    <div className="profileKoreaName"> 문병곤 </div>
                  </div>
                  <div className="userChange">전환</div>
                </div>
                <div className="recommendProfile">
                  <div className="recommendForUser">
                    <p className="recommendWord">회원님을 위한 추천</p>
                    <div className="showAll">모두 보기</div>
                  </div>
                  <RecommendUserList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Main;

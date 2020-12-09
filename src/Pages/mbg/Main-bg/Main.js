import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      commentList: [],
    };
  }
  //다지워버려 북한 빛깔 조아람
  pushComment = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = (e) => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.value]),
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
            </div>
          </div>
          <div className="outLine">
            <div className="mainContents">
              <div className="storyBar">
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="./images/mbg/120948293_779766016147236_976515620587209369_n.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>jacob.lee19</p>
                  </div>
                </span>
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="/images/mbg/126245932_1164257410643962_5670031182066747216_n.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>moone_hyeon</p>
                  </div>
                </span>
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="./images/mbg/winter.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>writer_winter</p>
                  </div>
                </span>
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="./images/mbg/cine21.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>cine_21</p>
                  </div>
                </span>
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="./images/mbg/hosico.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>hosico_cat</p>
                  </div>
                </span>
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="./images/mbg/unknown.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>unknown</p>
                  </div>
                </span>
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="./images/mbg/aram.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>aglioolive0206</p>
                  </div>
                </span>
                <span className="storyContents">
                  <div className="storyOutline">
                    <img
                      src="./images/mbg/iz.jpg"
                      className="storyProfile"
                      alt="스토리 유저"
                    />
                    <p>official_izone</p>
                  </div>
                </span>
              </div>

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
                      {" "}
                      좋아요
                      <span className="likeNumber"> 456</span> 개
                    </button>
                  </div>
                  <div className="textBar">
                    <div className="writersComment">
                      <a href="https://www.instagram.com/" className="userId">
                        hosico_cat
                      </a>
                      <span className="userComment"> I love cat!</span>
                    </div>
                    <div className="replyBar">
                      <div className="totalReply">
                        댓글
                        <span className="countReply">300</span> 개 모두 보기
                      </div>
                      <ul>
                        <li>
                          <div className="comment">
                            <a
                              href="https://www.instagram.com/"
                              className="followerId"
                            >
                              cat_lover
                            </a>
                            <span className="userComment"> me too!</span>
                          </div>
                          <div className="comment">
                            <a
                              href="https://www.instagram.com/"
                              className="followerId"
                            >
                              cat_is_love
                            </a>
                            <span className="userComment">
                              {" "}
                              조아람은 사랑입니다. KIN머거
                            </span>
                          </div>
                          {this.state.commentList.map((comm, idx) => {
                            return (
                              <li key={idx}>
                                <a
                                  href="https://www.instagram.com/"
                                  className="userId"
                                >
                                  moonvenn_dev{" "}
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
                  <div className="recommendUserList">
                    <div className="recommendUser">
                      <img
                        src="./images/mbg/u1.jpg"
                        className="recommendUserPhoto"
                        alt="user"
                      />
                      <div>
                        <a
                          href="https://www.instagram.com/"
                          className="recommendId u1"
                        >
                          e_seul202
                        </a>
                        <div className="recProfile u1">
                          000님 외 3명이 팔로우 합니다
                        </div>
                      </div>
                      <div className="follow u1">팔로우</div>
                    </div>
                    <div className="recommendUser">
                      <img
                        src="./images/mbg/u2.jpg"
                        className="recommendUserPhoto"
                        alt="user"
                      />
                      <div>
                        <a
                          href="https://www.instagram.com/"
                          className="recommendId u3"
                        >
                          seongqqq95
                        </a>
                        <div className="recProfile u2">
                          000님 외 3명이 팔로우 합니다
                        </div>
                      </div>
                      <div className="follow u2">팔로우</div>
                    </div>
                    <div className="recommendUser u3">
                      <img
                        src="./images/mbg/u3.jpg"
                        className="recommendUserPhoto"
                        alt="user"
                      />
                      <div>
                        <a
                          href="https://www.instagram.com/"
                          className="recommendId u3"
                        >
                          joonsikyang
                        </a>
                        <div className="recProfile u3">
                          000님 외 8명이 팔로우 합니다
                        </div>
                      </div>
                      <div className="follow u3">팔로우</div>
                    </div>
                    <div className="recommendUser">
                      <img
                        src="./images/mbg/u4.jpg"
                        className="recommendUserPhoto"
                        alt="user"
                      />
                      <div>
                        <a
                          href="https://www.instagram.com/"
                          className="recommendId u4"
                        >
                          yuhyeonggon8
                        </a>
                        <div className="recProfile u4">
                          000000000000님 외 8명이 팔로우 합니다
                        </div>
                      </div>
                      <div className="follow u4">팔로우</div>
                    </div>
                    <div className="recommendUser">
                      <img
                        src="./images/mbg/u5.jpg"
                        className="recommendUserPhoto"
                        alt="user"
                      />
                      <div>
                        <a
                          href="https://www.instagram.com/"
                          className="recommendId u5"
                        >
                          parkuenho
                        </a>
                        <div className="recProfile u5">
                          000님 외 3명이 팔로우 합니다
                        </div>
                      </div>
                      <div class="follow u5">팔로우</div>
                    </div>
                  </div>
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

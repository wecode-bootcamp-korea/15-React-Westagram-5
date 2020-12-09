import React from "react";
import "./Main.scss";
import Story from "./Story.js";
import Feed from "./Feed.js";

const ADDFRIENDINFO = [
  {
    id: 0,
    imageURL: "../../../images/aramcho/j.juunn.png",
    userName: "j.juunn",
    friendDesc: "Instagram 신규 가입",
    followFrdBtn: "팔로우",
  },
  {
    id: 1,
    imageURL: "../../../images/aramcho/dana_ryu.png",
    userName: "dana_ryu",
    friendDesc: "hyunegg_u님이 팔로우 합니다",
    followFrdBtn: "팔로우",
  },
  {
    id: 2,
    imageURL: "../../../images/aramcho/tr_won.png",
    userName: "tr_won",
    friendDesc: "toyman님이 팔로우 합니다",
    followFrdBtn: "팔로우",
  },
  {
    id: 3,
    imageURL: "../../../images/aramcho/fated84.png",
    userName: "fated84",
    friendDesc: "samkim2244님이 팔로우 합니다",
    followFrdBtn: "팔로우",
  },
  {
    id: 4,
    imageURL: "../../../images/aramcho/hyunnmnn.png",
    userName: "hyunnmnn",
    friendDesc: "ok_k_j님이 팔로우 합니다",
    followFrdBtn: "팔로우",
  },
];

class Main extends React.Component {
  render() {
    return (
      <>
        <section id="allSectionId" className="Main">
          <div id="navWrapId" className="navWrap">
            <nav className="navSec">
              <div id="logoId" className="logo">
                <div className="logoTitle">Weestagram</div>
              </div>
              <div id="searchId" className="searchContainer">
                <i className="fas fa-search searchIcon"></i>
                <input placeholder="검색" />
              </div>
              <div id="iconSecId" className="iconSec">
                <i id="icon1" className="fas fa-home"></i>
                <i id="icon2" className="fas fa-paper-plane"></i>
                <i id="icon3" className="far fa-compass"></i>
                <i id="icon4" className="far fa-heart"></i>
                <div className="navBarProfImg">
                  <img
                    className="navBarProfDisplay"
                    src="../../../images/aramcho/myProfile.png"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div className="mainWrap">
            <main id="thisMainId" className="thisMain">
              <section id="midSecId" className="mainMidSec">
                <Story></Story>
                <Feed></Feed>
              </section>
              <section id="mainRightSecId" className="mainRightSec">
                <div className="fixedDiv">
                  <div className="rightFeed1">
                    <div>
                      <img
                        alt="profilePic"
                        src="../../../images/aramcho/myProfile.png"
                      />
                    </div>
                    <div className="userProfile">
                      <div className="userId">aglioolive0206</div>
                      <div className="rightUserName">Aram</div>
                    </div>
                    <div className="switchBtn">전환</div>
                  </div>
                  <div className="rightFeed2">
                    <div className="rightFeed2Head">
                      <div id="rf2H1">회원님을 위한 추천</div>
                      <div id="rf2H2">모두 보기</div>
                    </div>
                    <div>
                      {ADDFRIENDINFO.map((el) => {
                        return (
                          <div className="addFriend">
                            <div className="friendProfilePic">
                              <img src={el.imageURL} />
                            </div>
                            <div className="friendProfile">
                              <div className="friendId">{el.userName}</div>
                              <div className="friendDesc">{el.friendDesc}</div>
                            </div>
                            <div className="followFrdBtn">
                              {el.followFrdBtn}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="rightFeed3">
                    <a className>소개 &#183;</a>
                    <a className> 도움말 &#183;</a>
                    <a className> 홍보센터 &#183;</a>
                    <a className> API &#183;</a>
                    <a className> 채용 정보 &#183;</a>
                    <a className> 개인정보처리방침 &#183;</a>
                  </div>
                  <div className="rightFeed4">
                    <a className>약관 &#183;</a>
                    <a className> 위치 &#183;</a>
                    <a className> 인기 계정 &#183;</a>
                    <a className> 해시태그 &#183;</a>
                    <a className> 언어</a>
                  </div>
                  <div className="rightFeed5">
                    <a className>© 2020 WEESTAGRAM FROM WECODE</a>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </section>
      </>
    );
  }
}
export default Main;

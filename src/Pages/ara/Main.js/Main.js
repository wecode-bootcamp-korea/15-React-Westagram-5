import React from "react";
import "./Main.scss";
import Story from "./Story.js";
import Feed from "./Feed.js";

class Main extends React.Component {
  render() {
    return (
      <>
        <section id="allSectionId" className="allSection">
          <div id="navWrapId" className="navWrap">
            <nav className="navSec">
              <div id="logoId" className="logo">
                {/* <div style="font-family:Lobster, seif;"> */}
                <div className="logoTitle">Weestagram</div>
              </div>
              <div id="searchId" className="searchContainer">
                <i className="fas fa-search searchIcon"></i>
                <input className="searchInput" placeholder="검색" />
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
                <div className="rightFeed1">
                  <div className="userProfilePic">
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
                  <div className="addFriend">
                    <div className="friendProfilePic">
                      <img
                        className="fpClass"
                        src="../../../images/aramcho/j.juunn.png"
                      />
                    </div>
                    <div className="friendProfile">
                      <div className="friendId">j.juunn</div>
                      <div className="friendDesc">Instagram 신규 가입</div>
                    </div>
                    <div className="followFrdBtn">팔로우</div>
                  </div>
                  <div className="addFriend">
                    <div className="friendProfilePic">
                      <img
                        className="fpClass"
                        src="../../../images/aramcho/dana_ryu.png"
                      />
                    </div>
                    <div className="friendProfile">
                      <div className="friendId">dana_ryu</div>
                      <div className="friendDesc">
                        hyunegg_u님이 팔로우 합니다
                      </div>
                    </div>
                    <div className="followFrdBtn">팔로우</div>
                  </div>
                  <div className="addFriend">
                    <div className="friendProfilePic">
                      <img
                        className="fpClass"
                        src="../../../images/aramcho/tr_won.png"
                      />
                    </div>
                    <div className="friendProfile">
                      <div className="friendId">tr_won</div>
                      <div className="friendDesc">toyman님이 팔로우 합니다</div>
                    </div>
                    <div className="followFrdBtn">팔로우</div>
                  </div>
                  <div className="addFriend">
                    <div className="friendProfilePic">
                      <img
                        className="fpClass"
                        src="../../../images/aramcho/fated84.png"
                      />
                    </div>
                    <div className="friendProfile">
                      <div className="friendId">fated84</div>
                      <div className="friendDesc">
                        samkim2244님이 팔로우 합니다
                      </div>
                    </div>
                    <div className="followFrdBtn">팔로우</div>
                  </div>
                  <div className="addFriend">
                    <div className="friendProfilePic">
                      <img
                        className="fpClass"
                        src="../../../images/aramcho/hyunnmnn.png"
                      />
                    </div>
                    <div className="friendProfile">
                      <div className="friendId">hyunnmnn</div>
                      <div className="friendDesc">ok_k_j님이 팔로우 합니다</div>
                    </div>
                    <div className="followFrdBtn">팔로우</div>
                  </div>
                </div>
                <div className="rightFeed3">
                  <a className="rightFooterElement">소개 &#183;</a>
                  <a className="rightFooterElement"> 도움말 &#183;</a>
                  <a className="rightFooterElement"> 홍보센터 &#183;</a>
                  <a className="rightFooterElement"> API &#183;</a>
                  <a className="rightFooterElement"> 채용 정보 &#183;</a>
                  <a className="rightFooterElement"> 개인정보처리방침 &#183;</a>
                </div>
                <div className="rightFeed4">
                  <a className="rightFooterElement">약관 &#183;</a>
                  <a className="rightFooterElement"> 위치 &#183;</a>
                  <a className="rightFooterElement"> 인기 계정 &#183;</a>
                  <a className="rightFooterElement"> 해시태그 &#183;</a>
                  <a className="rightFooterElement"> 언어</a>
                </div>
                <div className="rightFeed5">
                  <a className="rightFooterElement">
                    © 2020 WEESTAGRAM FROM WECODE
                  </a>
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

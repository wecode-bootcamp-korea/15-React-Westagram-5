import React from "react";
import "./MainHTH.scss";
import Article from "./Components/Article/Article";
import SearchView from "./Components/SearchView/SearchView";

class MainHTH extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      searchText: "",
      users: [],
      searchResult: [],
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    fetch("/data/hth/userData.json")
      .then((res) => res.json())
      .then(({ users }) => this.setState({ users }));
  };

  searchOnChangeHandle = (event) => {
    this.setState(
      {
        searchText: event.target.value,
      },
      () => {
        this.searchViewRender();
      }
    );
  };

  searchViewRender = () => {
    const { searchText } = this.state;
    if (searchText) {
      const result = this.state.users.filter((user) => {
        return user.nickname.includes(searchText);
      });
      this.setState({
        searchResult: result,
      });
    }
  };

  onClickHandle = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const { searchResult, searchText } = this.state;
    const { onClickHandle, searchOnChangeHandle } = this;

    return (
      <div className="MainHTH">
        <nav className="main-nav">
          <div className="nav-container">
            <div className="nav-logo">
              <img
                className="nav-logo-img"
                src="./images/hth/instagram-2.png"
                alt="nav-log-img"
              />
              <div className="nav-logo-text">
                <div className="small-border">Westagram</div>
              </div>
            </div>
            <div className="search-bar">
              <input
                className="search-input"
                type="text"
                placeholder="검색"
                onChange={searchOnChangeHandle}
              />
              <div
                className={
                  "search-list " +
                  (searchText && searchResult.length > 0 ? "" : "hidden")
                }
              >
                <ul>
                  {searchResult.map((user) => (
                    <SearchView key={user.id} id={user.id} user={user} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="menu-bar">
              <img
                className="menu-icon"
                src="./images/hth/compass.png"
                alt="compass"
              />
              <img
                className="menu-icon"
                src="./images/hth/heart.png"
                alt="heart"
              />
              <img
                className="menu-icon"
                src="./images/hth/user.png"
                alt="user"
              />
              <img
                className="menu-icon circle profile-button"
                src="./images/hth/my_profile.jpg"
                alt="profile"
                onClick={onClickHandle}
              />
              <div className={this.state.clicked ? "show-menu-box" : "hidden"}>
                <div className="in-menu">
                  <i className="far fa-user-circle"></i>
                  <span>프로필</span>
                </div>
                <div className="in-menu">
                  <i className="far fa-bookmark"></i>
                  <span>저장됨</span>
                </div>
                <div className="in-menu">
                  <i className="fas fa-cog"></i>
                  <span>설정</span>
                </div>
                <div className="in-menu">로그아웃</div>
              </div>
            </div>
          </div>
        </nav>
        <div className="main-container">
          <div className="feeds">
            <Article />
          </div>
          <div className="main-right">
            <div className="right-container">
              <img
                className="right-profile"
                src="./images/hth/my_profile.jpg"
                alt="my-profile"
              />
              <div className="right-myname">
                <div>
                  <span>kingth_man</span>
                </div>
                <div className="right-nickname">하태현님</div>
              </div>
              <div className="right-button">전환</div>
            </div>
            <div className="right-mid-div">
              <div className="mid-left-div">회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>
            <div className="friends">
              <div className="right-container">
                <img
                  className="right-profile"
                  src="./images/hth/friends1.jpg"
                  alt="friends1"
                />
                <div className="right-myname">
                  <div>
                    <span>wiinnerb</span>
                  </div>
                  <div className="right-nickname">Follows you</div>
                </div>
                <div className="right-button">팔로우</div>
              </div>
              <div className="right-container">
                <img
                  className="right-profile"
                  src="./images/hth/friends2.jpg"
                  alt="friends2"
                />
                <div className="right-myname">
                  <div>
                    <span>joooniboy</span>
                  </div>
                  <div className="right-nickname">
                    ash.island님 외 3명이 팔로우 합니다.
                  </div>
                </div>
                <div className="right-button">팔로우</div>
              </div>
              <div className="right-container">
                <img
                  className="right-profile"
                  src="./images/hth/friends3.jpg"
                  alt="friends3"
                />
                <div className="right-myname">
                  <div>
                    <span>chaehoon.p</span>
                  </div>
                  <div className="right-nickname">Follows you</div>
                </div>
                <div className="right-button">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHTH;

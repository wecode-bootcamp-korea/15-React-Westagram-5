import React from "react";
import SearchData from "./Data/SearchData";
import SearchID from "./NavbarSearch/SerachID";
import SearchComment from "./NavbarSearch/SearchComment";
import "../config/NavBar.scss";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMode: false,
      searchData: SearchData,
      inputValue: "",
      MenuMode: "false",
      totalSearchListID: [],
      totalSearchListComment: [],
    };
  }
  /* search */

  // showFilterdID = (id) => {};

  searchInput = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputValue: inputValue,
    });
    /* id */
    if (inputValue.length >= 1) {
      // this.props.zindexMode(true);
      const filterIDList = SearchData.filter((data) => {
        return data.id.includes(inputValue);
      });
      this.setState({
        totalSearchListID: filterIDList,
      });
    } else if (inputValue.length === 0) {
      this.setState({
        totalSearchListID: [],
      });
    }

    /* comment */
    if (inputValue.length >= 1) {
      const filterCommentList = SearchData.filter((data) => {
        console.log(this.state.totalSearchListComment);
        return data.comment.includes(inputValue);
      });
      this.setState({
        totalSearchListComment: filterCommentList,
      });
    } else if (inputValue.length === 0) {
      this.setState({
        totalSearchListComment: [],
      });
    }
  };

  /* toggleBtn */

  toggleBtnActive = () => {
    this.setState({
      searchMode: !this.state.searchMode,
    });
    if (this.state.searchMode === true) {
      this.setState({
        totalSearchListComment: [],
        totalSearchListID: [],
        inputValue: "",
      });
    }
  };

  toggleMenuActive = () => {
    this.setState({
      MenuMode: !this.state.MenuMode,
    });
  };

  render() {
    // console.log(this.props.zindexMode);

    return (
      <nav>
        <div className="logo">
          <div className="logo__icon">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt="logo"
            />
          </div>
          <h2>Chanstagram</h2>
        </div>

        <div
          className={
            this.state.searchMode ? "search__bar active" : "search__bar"
          }
        >
          <input
            type="text"
            className="searh__input"
            onChange={this.searchInput}
            value={this.state.inputValue}
          />
          <div className="search__btn" onClick={this.toggleBtnActive}>
            <i className="fas fa-search"></i>
          </div>
          <div className="seacrh__table">
            {/* Id */}
            <SearchID totalSearchListID={this.state.totalSearchListID} />
            {/* comment */}
            <SearchComment
              totalSearchListComment={this.state.totalSearchListComment}
            />
          </div>
        </div>
        {/*  Navbar UserInfo  */}
        <div className="logo__userinfo">
          <ul className="logo__userinfo__lists">
            <li className="logo__userinfo__list">
              <a href="#">
                {" "}
                <i className="fas fa-house-user"></i>
              </a>
            </li>
            <li className="logo__userinfo__list">
              <a href="#">
                {" "}
                <i className="far fa-paper-plane"></i>
              </a>
            </li>
            <li className="logo__userinfo__list">
              <a href="#">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt=""
                />
              </a>
            </li>

            <li className="logo__userinfo__list">
              <a href="#">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                />
              </a>
            </li>

            <li id="userInfo__menu" className="logo__userinfo__list">
              <a href="#">
                {" "}
                <img
                  className="userInfo__image"
                  src="./images/girss.png"
                  alt=""
                  onClick={this.toggleMenuActive}
                />
              </a>

              <ul
                className={
                  this.state.MenuMode ? "menu__bar" : "menu__bar active"
                }
              >
                <li>
                  <i className="far fa-user"></i>
                  <a href="#">프로필</a>
                </li>
                <li>
                  <i className="far fa-bookmark"></i>
                  <a href="#">저장됨</a>
                </li>
                <li>
                  <i className="fas fa-cog"></i>
                  <a href="#">설정</a>
                </li>
                <li>
                  <i className="fas fa-sync"></i>
                  <a href="#">계정 전환</a>
                </li>
                <li>
                  <i className="fas fa-sign-out-alt"></i>
                  <a href="#">로그 아웃</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

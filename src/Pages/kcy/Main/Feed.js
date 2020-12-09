import React from "react";
import feedHeaderData from "./Data/FeedHeaderData";
import Comment from "./Comment";
import "../config/Feed.scss";
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedHeaderImage: feedHeaderData,
      inputValue: "",
      inputValueList: [],
      num: 1,
      mode: false,
      modalMode: false,
    };
  }

  /* slide */

  /* modal */
  modal = () => {
    this.setState({
      modalMode: !this.state.modalMode,
    });
  };

  /* comment Heart Btn  */

  heartChange = (mode, index) => {
    const changedList = [...this.state.inputValueList];
    changedList[index].mode = !mode;

    this.setState({
      inputValueList: changedList,
    });
  };

  /* Feed Heart Btn */

  list = (e) => {
    if (e.target) {
      this.setState({
        mode: !this.state.mode,
      });
    }
  };

  /* comment create & remove  */

  createItem = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  removeItem = (id) => {
    const { inputValueList } = this.state;

    this.setState({
      inputValueList: inputValueList.filter((e) => e.id !== id),
    });
  };

  inputCreate = () => {
    this.setState({
      inputValueList: this.state.inputValueList.concat({
        id: this.state.num,
        comment: this.state.inputValue,
        mode: false,
      }),
      inputValue: "",
      num: this.state.num + 1,
    });
  };

  inputEnter = (e) => {
    if (e.key === "Enter") {
      this.inputCreate();
    }
  };

  inputClick = () => {
    this.inputCreate();
  };

  render() {
    return (
      <div className="feeds">
        <div
          className={
            this.state.modalMode === true
              ? "modal__ellipsis"
              : "modal__ellipsis hidden"
          }
        >
          <div className="modal__overlay" onClick={this.modal}></div>
          <div className="modal__content">
            <ul>
              <li>신고</li>
              <li>팔로우 취소</li>
              <li>게시물로 이동</li>
              <li>공유 대상</li>
              <li>링크 복사</li>
              <li>퍼가기 </li>
              <li id="modal__close" onClick={this.modal}>
                ❤
              </li>
            </ul>
          </div>
        </div>
        <div className="feeds_container">
          <div className="feeds__header">
            <ul
              className="slides"
              style={{ left: -this.state.num * 68 + "px" }}
            >
              {this.state.feedHeaderImage.map((images, index) => {
                return (
                  <li
                    key={index}
                    length={() => this.setState({ number: index })}
                  >
                    <div className="imgBox">
                      <img src={images.picture} alt="slider image" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="controls">
            <span className="prev">
              <i id="prev__heart" className="fas fa-heart"></i>
            </span>
            <span className="next">
              <i id="next__heart" className="fas fa-heart"></i>
            </span>
          </p>
        </div>
        <article>
          <div className="card">
            <div className="card__menu">
              <div className="card__userinfo">
                <img src="./images/사람1.png" alt="" />
                <a href="#">ryang_ae</a>
              </div>
              <span>
                <i
                  id="elli__modal"
                  className="fas fa-ellipsis-h"
                  onClick={this.modal}
                ></i>
              </span>
            </div>

            <div className="card__image">
              <img src="./images/g.png" alt="" />
            </div>
          </div>

          <div className="card__description">
            <div className="header__icon">
              <div className="Heart">
                <ul className="ulHeart">
                  <li className="liHeart">
                    <i
                      id="heart"
                      className={
                        this.state.mode === true
                          ? "fa-heart fas"
                          : "fa-heart far"
                      }
                      onClick={this.list}
                    ></i>
                  </li>
                  <li>
                    <i className="far fa-comment"></i>
                  </li>
                  <li>
                    <i className="far fa-paper-plane"></i>
                  </li>
                </ul>
              </div>
              <div class="header__button">
                <a href="#">
                  <i className="far fa-share-square"></i>
                </a>
              </div>
            </div>
            <div className="like__comment">
              <img src="./images/사람3.png" alt="" />
            </div>
            <ul class="lists" ref={this.ulRef}>
              {this.state.inputValueList.map((num, index) => {
                return (
                  <Comment
                    id={num.id}
                    comment={num.comment}
                    mode={num.mode}
                    index={index}
                    heartChange={this.heartChange}
                    removeItem={this.removeItem}
                  />
                );
              })}
            </ul>
            <div className="card__input">
              <input
                className="input__text"
                type="text"
                value={this.state.inputValue}
                placeholder="Comment Come on !!!"
                onChange={this.createItem}
                onKeyUp={this.inputEnter}
              />
              <button className="card__btn" onClick={this.inputClick}>
                게시
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;

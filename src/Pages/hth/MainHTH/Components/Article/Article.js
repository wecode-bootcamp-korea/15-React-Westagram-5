import React from "react";
import "./Article.scss";
import Comment from "./Components/Comment/Comment";

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "kingth_man",
      inputValue: "",
      comments: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/hth/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          comments: res.comments,
        });
      });
  }

  removeOnClick = (id) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      this.setState({
        comments: this.state.comments.filter((comment, index) => {
          return index !== id;
        }),
      });
    }
  };

  onKeyPressHandle = (event) => {
    if (event.key === "Enter") {
      if (this.state.inputValue) this.onClickHandle();
    }
  };

  onClickHandle = () => {
    const { comments, nickname, inputValue } = this.state;

    this.setState({
      inputValue: "",
      comments: [
        ...comments,
        {
          id: comments.length,
          nickname: nickname,
          text: inputValue,
        },
      ],
    });
  };

  onChangeHandle = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  validationCheck = () => {
    return this.state.inputValue ? false : true;
  };

  render() {
    const {
      onKeyPressHandle,
      onClickHandle,
      onChangeHandle,
      validationCheck,
      removeOnClick,
    } = this;
    const { inputValue, comments } = this.state;
    const inputCheck = validationCheck();

    return (
      <article className="Article">
        <div className="article-header">
          <img
            className="header-image"
            src="./images/hth/ash_profile.jpg"
            alt="article-profile-img"
          />
          <div className="header-nickname">ash.island</div>
        </div>
        <div className="article-main">
          <img src="./images/hth/ashphoto.jpg" alt="article-img" />
        </div>
        <div className="comment-box">
          <div className="comment-header">
            <div className="left-icon">
              <img
                className="comment-header-icon"
                src="./images/hth/heart.png"
                alt="heart-icon"
              />
              <img
                className="comment-header-icon"
                src="./images/hth/chat.png"
                alt="chat-icon"
              />
              <img
                className="comment-header-icon"
                src="./images/hth/upload.png"
                alt="upload-icon"
              />
            </div>
            <img
              className="comment-header-icon"
              src="./images/hth/bookmark.png"
              alt="bookmark-icon"
            />
          </div>
          <div className="comment-like">
            <span className="like-nickname">kingth_man</span>님 외 4명이
            좋아합니다.
          </div>
          <div className="comment-list">
            <ul>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  removeClick={removeOnClick}
                />
              ))}
            </ul>
          </div>
          <div className="input-box">
            <input
              className="comment-input"
              placeholder="댓글 달기..."
              type="text"
              onChange={onChangeHandle}
              onKeyPress={onKeyPressHandle}
              value={inputValue}
            />
            <button
              onClick={onClickHandle}
              disabled={inputCheck}
              className={"input-button " + (inputCheck ? "" : "active-button")}
            >
              게시
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;

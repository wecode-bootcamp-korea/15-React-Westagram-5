import React from "react";
import Comment from "./Components/Comment/Comment";
import "./ArticleSection.scss";

class ArticleSection extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "kingth_man",
      inputValue: "",
      comments: [],
    };
  }

  componentDidMount() {
    this.getCommentData();
  }

  getCommentData = () => {
    fetch("/data/hth/commentData.json")
      .then((res) => res.json())
      .then(({ comments }) => this.setState({ comments }));
  };

  removeComment = (id) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      this.setState({
        comments: this.state.comments.filter((comment, index) => {
          return index !== id;
        }),
      });
    }
  };

  addCommentPressEnter = (event) => {
    if (event.key === "Enter") {
      if (this.state.inputValue) this.addComment();
    }
  };

  addComment = () => {
    const { comments, nickname, inputValue } = this.state;

    this.setState({
      inputValue: "",
      comments: [
        ...comments,
        {
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

  render() {
    const {
      addCommentPressEnter,
      addComment,
      onChangeHandle,
      removeComment,
    } = this;
    const { inputValue, comments } = this.state;
    const inputCheck = !this.state.inputValue;

    return (
      <article className="ArticleSection">
        <div className="article-header">
          <img src="./images/hth/ash_profile.jpg" alt="article-profile-img" />
          <div className="header-nickname">ash.island</div>
        </div>
        <div className="article-main">
          <img src="./images/hth/ashphoto.jpg" alt="article-img" />
        </div>
        <div className="comment-box">
          <div className="comment-header">
            <div className="left-icon">
              <img src="./images/hth/heart.png" alt="heart-icon" />
              <img src="./images/hth/chat.png" alt="chat-icon" />
              <img src="./images/hth/upload.png" alt="upload-icon" />
            </div>
            <img src="./images/hth/bookmark.png" alt="bookmark-icon" />
          </div>
          <div className="comment-like">
            <span className="like-nickname">kingth_man</span>님 외 4명이
            좋아합니다.
          </div>
          <div className="comment-list">
            <ul>
              {comments.map((comment, index) => (
                <Comment
                  key={index}
                  id={index}
                  comment={comment}
                  removeComment={removeComment}
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
              onKeyPress={addCommentPressEnter}
              value={inputValue}
            />
            <button
              onClick={addComment}
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

export default ArticleSection;

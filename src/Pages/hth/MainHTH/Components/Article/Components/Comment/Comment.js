import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  onClickLikeButton = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const { comment, removeComment, id } = this.props;
    const { clicked } = this.state;
    const { onClickLikeButton } = this;

    return (
      <>
        <li id={id} className="Comment">
          <div className="left-div">
            <span className="comment-list-nickname">{comment.nickname}</span>
            <div className="comment-text">{comment.text}</div>
          </div>
          <div className="right-div">
            <button className="delete-button" onClick={() => removeComment(id)}>
              ···
            </button>
            <i
              className={`${clicked ? "fas" : "far"} fa-heart like-button`}
              onClick={onClickLikeButton}
            />
          </div>
        </li>
      </>
    );
  }
}

export default Comment;

import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  onClickHandle = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const { comment, removeClick } = this.props;
    const { clicked } = this.state;
    const { onClickHandle } = this;

    return (
      <>
        <li id={comment.id} className="Comment">
          <span className="comment-list-nickname">{comment.nickname}</span>
          <span>{comment.text}</span>
          <button
            className="delete-button"
            onClick={() => removeClick(comment.id)}
          >
            ...
          </button>
          <i
            className={(clicked ? "fas" : "far") + " fa-heart like-button"}
            onClick={onClickHandle}
          ></i>
        </li>
      </>
    );
  }
}

export default Comment;

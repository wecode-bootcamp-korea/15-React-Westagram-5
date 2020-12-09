import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      commentInput: "",
    };
  }
  onClickHandler = (e) => {
    e.preventDefault();
    const passObj = { commentContainer: this.state.commentInput };
    const tasks = [...this.state.tasks, passObj];
    this.setState({
      tasks,
      commentInput: "",
    });
  };
  onChangeHandler = (e) => {
    this.setState({
      commentInput: e.target.value,
    });
  };
  render() {
    const taskDisplay = this.state.tasks.map((content, i) => {
      return (
        <div className="newComment" key={i}>
          <p className="userName">{this.props.currentUser}</p>
          <p className="userComment"> {content.commentContainer}</p>
          <i className="far fa-heart"></i>
        </div>
      );
    });
    return (
      <>
        <div className="Comment">
          <div>{taskDisplay}</div>
          <div className="mFdDate">{this.props.postedDate}</div>
          <div className="mFdCmtIpt">
            <input
              value={this.state.commentInput}
              onChange={this.onChangeHandler}
              className="mFdCmtIptBox"
              placeholder="Add a comment..."
            />
            <button className="cmtBtnCls" onClick={this.onClickHandler}>
              Post
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Comment;

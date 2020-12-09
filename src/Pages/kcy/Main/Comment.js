import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ulRef = React.createRef();
  }
  componentDidMount() {
    this.ulRef.current.scrollIntoView();
  }

  render() {
    const { id, comment, mode, index, removeItem, heartChange } = this.props;
    return (
      <li key={id} className="list__row" ref={this.ulRef}>
        <span className="list__name">
          Sexy Grils
          <span className="user__coment">{comment}</span>
        </span>
        <div className="like__con">
          <div className="list__delete" onClick={() => removeItem(id)}>
            <i className="fas fa-trash"></i>
          </div>
          <i
            id={id}
            className={mode === true ? "fa-heart fas" : "fa-heart far"}
            onClick={() => heartChange(mode, index)}
          ></i>
        </div>
      </li>
    );
  }
}

export default Comment;

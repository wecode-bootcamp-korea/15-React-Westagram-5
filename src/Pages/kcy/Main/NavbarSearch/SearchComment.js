import React from "react";

class SearchComment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.totalSearchListComment.map((e, i) => {
          return (
            <ul id="search__list">
              <li key={i}>
                <div className="profile__img">
                  <img src={e.picture} />
                </div>
                <div className="profile-text">
                  <p className="sub sub__id">{e.id}</p>
                  <p className="sub sub__comment">{e.comment}</p>
                </div>
              </li>
            </ul>
          );
        })}
      </>
    );
  }
}

export default SearchComment;

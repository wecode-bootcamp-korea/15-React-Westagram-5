import React from "react";
import "./SearchView.scss";

class SearchView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { nickname, imageUrl, id } = this.props.user;

    return (
      <>
        <li id={id} className="SearchView">
          <div>
            <img src={imageUrl} alt="#" />
          </div>
          <div>{nickname}</div>
        </li>
      </>
    );
  }
}

export default SearchView;

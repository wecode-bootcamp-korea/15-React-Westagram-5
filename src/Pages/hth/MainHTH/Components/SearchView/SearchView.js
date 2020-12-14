import React from "react";
import "./SearchView.scss";

class SearchView extends React.Component {
  render() {
    const { nickname, imageUrl, id, alt } = this.props.user;

    return (
      <li id={id} className="SearchView">
        <div>
          <img src={imageUrl} alt={alt} />
        </div>
        <div>{nickname}</div>
      </li>
    );
  }
}

export default SearchView;

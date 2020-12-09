import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__menu">
          <div className="footer__icon">
            <i className="fas fa-house-user"></i>
          </div>

          <div className="footer__bar">
            <div className="footer__btn">
              <i className="fas fa-search"></i>
            </div>
            <div className="footer__table">
              <ul id="footer__list"></ul>
            </div>
          </div>

          <div className="footer__icon">
            <i className="far fa-plus-square"></i>{" "}
          </div>

          <div className="footer__icon">
            <i className="fas fa-shopping-bag"></i>
          </div>

          <div className="footer__icon">
            <img src="./images/girss.png" alt="" />
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import MainRight from "./MainRight";
import Footer from "./Footer";
import "../config/Main.scss";
import "../config/Reset.scss";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap">
        {/* Navbar */}
        <Navbar />

        {/* main */}

        <div id="main">
          <div className="main__container">
            {/* Feed */}
            <Feed />
            {/* MainRight */}
            <MainRight />
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Footer.scss";

const FOOT_CATEGORY_A = [
  { id: 0, title: "블로그" },
  { id: 1, title: "채용 정보" },
  { id: 2, title: "도움말" },
  { id: 3, title: "API" },
  { id: 4, title: "개인정보처리방침" },
  { id: 5, title: "약관" },
  { id: 6, title: "인기 계정" },
  { id: 7, title: "해시태그" },
  { id: 8, title: "위치" },
];
const FOOT_CATEGORY_B = [
  { id: 0, title: "미용" },
  { id: 1, title: "댄스 및 공연" },
  { id: 2, title: "피트니스" },
  { id: 3, title: "식음료" },
  { id: 4, title: "집 및 정원" },
  { id: 5, title: "음악" },
  { id: 6, title: "시각 예술" },
];
class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerBlock">
          <Link to="/main" className="footElement">
            소개
          </Link>
          {FOOT_CATEGORY_A.map((el, i) => {
            return (
              <a className="footElement" key={i}>
                {el.title}
              </a>
            );
          })}
        </div>
        <div className="footerBlock">
          {FOOT_CATEGORY_B.map((el, i) => {
            return (
              <a className="footElement" key={i}>
                {el.title}
              </a>
            );
          })}
        </div>
        <div className="footerBlock">
          <a className="classB">English © 2020 Weestagram from Wecode</a>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);

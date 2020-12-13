import React from "react";
import { API } from "../../../config";
import "./LoginHTH.scss";

class LoginHTH extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      noticeText: "",
    };
  }

  // 15기 석여주님 백엔드 API 통신 연습
  signUp = () => {
    fetch(`${API}/user/account`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") window.alert("회원가입 성공");
        else window.alert("회원가입 실패!!");
      });
  };

  // 15기 석여주님 백엔드 API 통신 연습
  signIn = () => {
    fetch(`${API}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "SUCCESS") {
          alert("로그인 성공");
          this.props.history.push("./mainHa");
        } else alert("로그인 실패");
      });
  };

  pressEnter = (event) => {
    if (event.key !== "Enter") return;

    const { id, pw } = this.state;
    const isValid = id.includes("@") && pw.length > 4;

    if (isValid) this.signIn();
  };

  // checkAccount = () => {
  //   const { id, pw } = this.state;
  //   const trueId = "test@test.com";
  //   const truePw = "12345";
  //   if (id !== trueId) {
  //     this.setState({
  //       noticeText:
  //         "입력한 사용자명을 사용하는 계정을 찾을수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.",
  //     });
  //   } else if (pw !== truePw) {
  //     this.setState({
  //       noticeText: "잘못된 비밀번호입니다. 다시 확인하세요.",
  //     });
  //   } else {
  //     alert("로그인 성공");
  //     this.props.history.push("./mainHa");
  //   }
  // };

  checkInputValue = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { noticeText, id, pw } = this.state;
    const { checkInputValue, pressEnter, signUp, signIn } = this;
    const isActiveBtn = id.includes("@") && pw.length > 4;

    return (
      <main className="LoginHTH">
        <div className="img-container">
          <img
            id="slide1"
            className="slide-img visible"
            src="./images/hth/slide_img1.jpg"
            alt="sun"
          />
          <img
            className="phone-img"
            src="./images/hth/login_phoe_img.png"
            alt="phone"
          />
        </div>
        <section className="login-section">
          <div className="logo">Westagram</div>
          <input
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="login-input"
            onChange={checkInputValue}
          />
          <input
            name="pw"
            type="password"
            placeholder="비밀번호"
            className="login-input"
            onChange={checkInputValue}
            onKeyPress={pressEnter}
          />
          {/* <span>
              show
            </span> */}
          <button
            onClick={signIn}
            className={`login-button ${isActiveBtn ? "active-button" : ""}`}
            disabled={!isActiveBtn}
          >
            로그인
          </button>
          <button onClick={signUp} className={`login-button active-button`}>
            회원가입
          </button>
          <div className="hr-box">
            <div className="hr"></div>
            <div className="hr-text">또는</div>
            <div className="hr"></div>
          </div>
          <div className="facebook-box">
            <img
              className="facebook-logo"
              src="./images/hth/facebook.png"
              alt="facebook-logo"
            />
            <div className="facebook-login">Facebook으로 로그인</div>
          </div>
          <div className={`notice ${noticeText ? "" : "hidden"} `}>
            {noticeText}
          </div>

          <p className="notice-p"> 비밀번호를 잊으셨나요?</p>
        </section>
      </main>
    );
  }
}

export default LoginHTH;

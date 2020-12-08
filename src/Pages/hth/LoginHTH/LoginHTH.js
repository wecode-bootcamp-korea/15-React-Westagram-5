import React from "react";
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

  onKeyPressHandle = (event) => {
    if (event.key === "Enter") {
      if (this.state.id.includes("@") && this.state.pw.length > 4)
        this.onClickHandle();
    }
  };

  onClickHandle = () => {
    const { id, pw } = this.state;
    const trueId = "test@test.com";
    const truePw = "12345";
    if (id !== trueId) {
      this.setState({
        noticeText:
          "입력한 사용자명을 사용하는 계정을 찾을수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.",
      });
    } else if (pw !== truePw) {
      this.setState({
        noticeText: "잘못된 비밀번호입니다. 다시 확인하세요.",
      });
    } else {
      alert("로그인 성공");
      this.props.history.push("./hthmain");
    }
  };

  onChangeHandle = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { noticeText, id, pw } = this.state;
    const { onChangeHandle, onClickHandle, onKeyPressHandle } = this;
    const activeBtn = id.includes("@") && pw.length > 4;

    return (
      <>
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
              onChange={onChangeHandle}
            />
            <input
              name="pw"
              type="password"
              placeholder="비밀번호"
              className="login-input"
              onChange={onChangeHandle}
              onKeyPress={onKeyPressHandle}
            />
            {/* <span>
              show
            </span> */}
            <button
              onClick={onClickHandle}
              className={"login-button " + (activeBtn ? "active-button" : "")}
              disabled={!activeBtn}
            >
              로그인
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
            <div className="notice hiddne">{noticeText}</div>
            <p className="notice-p"> 비밀번호를 잊으셨나요?</p>
          </section>
        </main>
      </>
    );
  }
}

export default LoginHTH;

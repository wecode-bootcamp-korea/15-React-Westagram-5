import React from "react";
import { Link, withRouter } from "react-router-dom";
import Footer from "./Footer.js";
import "./Login.scss";

const API = "http://3.35.19.3:8000/account/signin";

class LoginAra extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      hiddenPW: true,
      btnColor: true,
      btnStatus: true,
      testEmail: "1@test.com",
      samplePw: "111111",
      productList: [],
    };
  }
  handleInputValueChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
  deleteToken = () => {
    localStorage.removeItem("token");
  };
  showPassword = () => {
    this.setState({
      hiddenPW: !this.state.hiddenPW,
    });
  };
  buttonChange = () => {
    const { id, pw, testEmail, samplePw } = this.state;
    const passValid = id.length > 4 && pw.length > 4;
    this.setState({
      btnColor: passValid ? false : true,
      btnStatus: passValid ? false : true,
    });
  };
  checkValidation = (e) => {
    e.preventDefault();
    const { id, pw, testEmail, samplePw } = this.state;
    if (id == testEmail && pw == samplePw && id.includes("@")) {
      alert("successful");
      this.props.history.push("/MainAra");
    } else {
      alert("not valid email or wrong password ");
    }
  };
  goToMain = (e) => {
    this.props.history.push("/main");
  };

  render() {
    const { id, pw, hiddenPW, btnColor } = this.state;
    return (
      <>
        <div className="Login">
          <section>
            <main className="containerMain">
              <article className="containerArticle">
                <div className="mainLeft">
                  <img src="../../../images/aramcho/instagram.png" />
                </div>
                <div className="mainRight">
                  <div className="logSec1">
                    <p className="logSec1_title">Weestagram</p>
                    <div
                      className="inputContainer"
                      onChange={this.buttonChange}
                    >
                      <div className="logSecId">
                        <input
                          id="id"
                          type="text"
                          placeholder="전화번호, 사용자 이름 또는 이메일"
                          value={id}
                          className="userNameInput"
                          onChange={this.handleInputValueChange}
                        />
                      </div>
                      <div className="logSecPw">
                        <input
                          id="pw"
                          type={hiddenPW ? "password" : "text"}
                          className="passWordInput"
                          value={pw}
                          onChange={this.handleInputValueChange}
                          placeholder="비밀번호"
                        />
                        <span className="showPw" onClick={this.showPassword}>
                          {hiddenPW ? "show" : "hide"}
                        </span>
                      </div>
                    </div>
                    <div className="logSecBtn">
                      <button
                        type="button"
                        className={btnColor ? "disabledBtn" : "enabledBtn"}
                        onClick={this.checkValidation}
                        disabled={this.state.btnStatus}
                      >
                        로그인
                      </button>
                    </div>
                    <div className="logSecUnderBtn">
                      <img
                        className="line1"
                        src="../../../images/aramcho/line.png"
                      />
                      <p>또는</p>
                      <img
                        className="line2"
                        src="../../../images/aramcho/line.png"
                      />
                    </div>
                    <div className="logSecFb">
                      <a>
                        <img src="../../../images/aramcho/facebook.png" />
                        Facebook으로 로그인
                      </a>
                    </div>
                    <div className="logSec1_6">
                      <p>비밀번호를 잊으셨나요?</p>
                    </div>
                  </div>

                  <div className="logSec2">
                    <div className="logSec2_1">계정이 없으신가요?</div>
                    <a className="logSec2_2">가입하기</a>
                  </div>
                  <div className="logSec3">
                    앱을 다운로드 하세요.
                    <div className="logSec3_1">
                      <a className="asImg">
                        <img
                          src="../../../images/aramcho/appStore.png"
                          width="140px"
                          height="40px"
                        />
                      </a>
                      <a className="gsImg">
                        <img
                          src="../../../images/aramcho/googleStore.png"
                          width="140px"
                          height="40px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </main>
            <Footer></Footer>
          </section>
        </div>
      </>
    );
  }
}
export default LoginAra;

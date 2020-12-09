import React from "react";
import "./Login.scss";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const API = "http://3.35.19.3:8000/account/signin";

class Login extends React.Component {
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
  // handleId = (e) => {
  //   this.setState({ id: e.target.value });
  //   // console.log(e.target.value)
  // };
  // handlePw = (e) => {
  //   this.setState({ pw: e.target.value });
  //   // console.log(e.target.value)
  // };
  // handleClick = () => {
  //   fetch(API, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.pw,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.Authorization) {
  //         alert("success");
  //         //   localStorage.setItem("token", result.Authorization);
  //         this.props.history.push("/main");
  //       } else {
  //         alert("fail");
  //       }
  //     });
  // };
  handleInputValueChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
  // value들위 비구조화 혹은 구조분해활당 (비구조화하면 this를생략해도된다)
  //ex : const {id, password, hiddenPW} = this.state;
  //render와 return 사이에 선언해줌//함수들은 render위에 선언
  deleteToken = () => {
    localStorage.removeItem("token");
  };
  showPassword = () => {
    // 토글식 : true & fasle
    this.setState({
      hiddenPW: !this.state.hiddenPW,
    });
  };
  buttonChange = () => {
    const { id, pw, testEmail, samplePw } = this.state;
    if (id.length > 4 && pw.length > 4) {
      this.setState({
        btnColor: false,
        btnStatus: false,
      });
    } else {
      this.setState({
        btnColor: true,
        btnStatus: true,
      });
    }
  };
  checkValidation = (e) => {
    e.preventDefault();
    const { id, pw, testEmail, samplePw } = this.state;
    if (id == testEmail && pw == samplePw && id.includes("@")) {
      alert("successful");
      this.props.history.push("/main");
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
                  <img
                    className="imgMain"
                    src="../../../images/aramcho/instagram.png"
                    width="400"
                    height="618"
                  />
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
                          // onChange={this.handleId}
                          //함수옆에 ()붙으면 즉시실행이라는말 그래서 위와같은경우는 () 안붙지만
                          //arrowFunction같은경우는 붙여야됨 {() => this.handleIdChange()}
                        />
                      </div>
                      <div className="logSecPw">
                        <input
                          id="pw"
                          type={hiddenPW ? "password" : "text"}
                          className="passWordInput"
                          value={pw}
                          onChange={this.handleInputValueChange}
                          // onChange={this.handlePw}
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
                        // onClick={this.handleClick}
                        onClick={this.checkValidation}
                        disabled={this.state.btnStatus}
                      >
                        로그인
                      </button>
                      {/* <button onClick={this.deleteToken}>delete token</button> */}
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
export default withRouter(Login);

// 최상단 tag 클레스네임은 이 컴포터는이름과 동일하게하기

import React from "react";
import "./Login.scss";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPw: "",
      idChecked: false,
      pwChecked: false,
      btnColor: "transparent",
      error: "",
    };
  }
  goToMain = () => {
    this.props.history.push("/main");
  };

  /* 아이디 값 체크 */
  idInputCheck = (event) => {
    this.setState({
      userName: event.target.value,
    });

    if (event.target.value.length >= 4) {
      this.setState({ idChecked: true }, () => this.btnChangeColor);
    } else {
      this.setState({ idChecked: false, error: "plase fill up 4 more" });
    }

    if (event.target.value.length >= 4) {
      if (event.target.value.includes("@")) {
        this.setState({ idChecked: true, error: "" }, () =>
          this.btnChangeColor()
        );
      } else {
        this.setState(
          {
            idChecked: false,
            error: "please fill up @",
          },
          () => this.btnChangeColor()
        );
      }
    } else {
      this.setState({
        idChecked: false,
        error: "please fill up more 4",
      });
    }
  };
  /* 비밀번호 값 체크 */
  pwInputCheck = (event) => {
    this.setState({
      userPW: event.target.value,
    });
    if (event.target.value.length >= 5) {
      this.setState(
        {
          userName: event.target.value,
          pwChecked: true,
          error: "",
        },
        () => this.btnChangeColor()
      );
    } else {
      this.setState({ pwChecked: false, error: "fill up more 5" }, () =>
        this.btnChangeColor()
      );
    }
  };

  /* 버튼 변화 */
  btnChangeColor = () => {
    if (this.state.idChecked && this.state.pwChecked === true) {
      this.setState({ btnColor: "black", error: "Sucess!" });
    } else if (this.state.idChecked || this.state.pwChecked === false) {
      this.setState({ btnColor: "red" });
    }
  };
  /* 버튼클릭 */
  btnClick = () => {
    if (this.state.idChecked && this.state.pwChecked) {
      this.goToMain();
    }
  };

  render() {
    return (
      <div className="login__wrap">
        <div className="login__card card__sign__up">
          <div className="login__card__box">
            <header class="login__head">
              <i class="fab fa-instagram"></i>
              <p>Chanstargram</p>
            </header>
            <div className="login__error">{this.state.error}</div>
            <form
              className="signupForm"
              name="signupForm"
              mathod="post"
              action="#"
            >
              <input
                className="userId"
                type="text"
                name="name"
                placeholder="전화번호 사용자 이름 또는 이메일"
                onChange={this.idInputCheck}
              />
              <input
                className="email"
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={this.pwInputCheck}
              />
              <button
                className="loginBtn"
                type="button"
                style={{ backgroundColor: this.state.btnColor }}
                onClick={this.btnClick}
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

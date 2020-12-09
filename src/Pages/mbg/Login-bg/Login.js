import React, { Component } from 'react';
import "./Login.scss";
import { Link } from 'react-router-dom';

const API = "http://3.35.19.3:8000/account/signup";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            password: ""
        };
    }
    handleValueInput = (e) => {
      const {id, value} = e.target;
      this.setState({
        [id] : value,
        })
     }
    showPassword = () => {
        this.setState({
        hiddenPw: !this.state.hiddenPw,
        })
    }
    checkValue = (e) => {
        e.preventDefault();
        const { id, password } = this.state;
        const checkId = id.includes("@");
        const checkPw = password.length >= 5;
        if (checkId && checkPw) {
            alert("로그인 성공")
            this.props.history.push("/main")
        }
        if (!checkId) {
            alert("이메일 형식이 아닙니다.")
        }
        if (!checkPw) {
            alert("비밀번호는 5자리 이상이여야 합니다.")
        }
    };

    handleClick = () => {
        fetch(API, {
            method: "POST",
            body: JSON.stringify({
              email: this.state.id,
              password: this.state.password,
            }),
        }) 
        .then(response =>response.json())
        .then(result => console.log(result));
    };
      
    loginEnter = (e) => {
        if(e.key === "Enter"){
          this.checkValue();
        }
      }

    render() {
      const {id, password, hiddenPw} = this.state;
      const activateBtn = (id.length && password.length) > 0;
      
        return (
            <div className="outline">
                <div className="login_cover_img flex_center">
                    <img src="./images/mbg/1.jpg" class="chang_img" alt="로그인로고" />
                </div>
                <div className="flex_center">
                    <div className="loginOutline">
                        <div className="login_form">
                            <img className="logo_img" src="./images/mbg/logo_text.png" alt="로고 이미지" />
                            <div className="flex_center login_data_form">
                                <div className="id_form in_txt_box">
                                    <span className="helper"></span>
                                    <input 
                                           id="id"
                                           type="text" 
                                           className="input_id"  
                                           placeholder="전화번호, 사용자 이름 또는 이메일"
                                           onfocus="this.placeholder=''"
                                           onChange={this.handleValueInput} 
                                           onKeyPress={this.loginEnter}
                                           value={id}
                                          />
                                </div>
                                <div className="pwd_form in_txt_box">
                                    <span className="helper"></span>
                                    <input 
                                           id="password"
                                           type={hiddenPw ? "Password" : "text"}
                                           className="input_pwd" 
                                           placeholder="비밀번호"
                                           onfocus="this.placeholder=''"
                                           onChange={this.handleValueInput} 
                                           onKeyPress={this.loginEnter}
                                           value={password}
                                           />
                                    <span className="showPw" 
                                          onClick={this.showPassword}>
                                          {hiddenPw? "show" : "hide"}
                                    </span>
                                </div>
                                <div className="login_btn_cover">
                                    <button id="login_btn"
                                            className={activateBtn ? "active" : ""}
                                            onClick={this.checkValue}>  
                                        <Link to="/Main">로그인</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="form_line">
                                <div className="txt_line"></div>
                                <div>또는</div>
                                <div className="txt_line"></div>
                            </div>
                            <div className="other_login flex_center">
                                <div>
                                    <span>
                                        <Link to="/State">Facebook으로 로그인</Link>
                                    </span>
                                </div>
                                <span className="search_pwd">비밀번호를 잊으셨나요?</span>
                            </div>
                            <div className="sign_form flex_center">
                                <div>계정이 없으신가요? 
                                    <button 
                                     id="signUp"
                                     onClick={this.handleClick}
                                     placeholder="가입하기"
                                     />
                                </div>
                            </div>
                            <div className="app_down_form">
                                앱으로 다운로드하세요
                                <div>
                                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" alt="ios" />
                                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" alt="앱스토어" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
import React, {Component} from 'react';
import "./Login.scss";
import { Link } from 'react-router-dom';


class Login extends Component {

    render() {
        return (
              <div className = "outline">
                <div className="login_cover_img flex_center">
                    <img src="./images/1.jpg" class="chang_img" alt="로그인로고" />
                </div>
                <div className="flex_center">
                    <div className="loginOutline">
                        <div className="login_form">
                            <img className="logo_img" src="./images/logo_text.png" alt="로고 이미지"/>
                            <div className="flex_center login_data_form">
                                <div className="id_form in_txt_box">
                                    <span className="helper">전화번호, 사용자 이름 또는 이메일</span>
                                    <input type="text" className="input_id" />
                                </div>
                                <div className="pwd_form in_txt_box">
                                    <span className="helper">비밀번호</span>
                                    <input type="Password" className="input_pwd" />
                                </div>
                                <div className="login_btn_cover">
                                    <button className="login_btn"> 
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
                                    <span>Facebook으로 로그인</span>
                                </div>
                                <span className="search_pwd">비밀번호를 잊으셨나요?</span>
                            </div>
                            <div className="sign_form flex_center">
                                <div>계정이 없으신가요? <a href="https://www.instagram.com/"style={{ color: "#0095f6" }}> 가입하기</a></div>
                            </div>
                            <div className="app_down_form">
                                앱으로 다운로드하세요
                                <div>
                                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" alt="ios"/>
                                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" alt="앱스토어"/>
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
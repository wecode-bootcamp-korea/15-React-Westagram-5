import React, { Component } from "react";

class RecommendUserList extends Component {
  render() {
    return (
      <div className="recommendUserList">
        <div className="recommendUser">
          <img
            src="./images/mbg/u1.jpg"
            className="recommendUserPhoto"
            alt="user"
          />
          <div>
            <a href="https://www.instagram.com/" className="recommendId u1">
              e_seul202
            </a>
            <div className="recProfile u1">000님 외 3명이 팔로우 합니다</div>
          </div>
          <div className="follow u1">팔로우</div>
        </div>
        <div className="recommendUser">
          <img
            src="./images/mbg/u2.jpg"
            className="recommendUserPhoto"
            alt="user"
          />
          <div>
            <a href="https://www.instagram.com/" className="recommendId u3">
              seongqqq95
            </a>
            <div className="recProfile u2">000님 외 3명이 팔로우 합니다</div>
          </div>
          <div className="follow u2">팔로우</div>
        </div>
        <div className="recommendUser u3">
          <img
            src="./images/mbg/u3.jpg"
            className="recommendUserPhoto"
            alt="user"
          />
          <div>
            <a href="https://www.instagram.com/" className="recommendId u3">
              joonsikyang
            </a>
            <div className="recProfile u3">000님 외 8명이 팔로우 합니다</div>
          </div>
          <div className="follow u3">팔로우</div>
        </div>
        <div className="recommendUser">
          <img
            src="./images/mbg/u4.jpg"
            className="recommendUserPhoto"
            alt="user"
          />
          <div>
            <a href="https://www.instagram.com/" className="recommendId u4">
              yuhyeonggon8
            </a>
            <div className="recProfile u4">
              000000000000님 외 8명이 팔로우 합니다
            </div>
          </div>
          <div className="follow u4">팔로우</div>
        </div>
        <div className="recommendUser">
          <img
            src="./images/mbg/u5.jpg"
            className="recommendUserPhoto"
            alt="user"
          />
          <div>
            <a href="https://www.instagram.com/" className="recommendId u5">
              parkuenho
            </a>
            <div className="recProfile u5">000님 외 3명이 팔로우 합니다</div>
          </div>
          <div class="follow u5">팔로우</div>
        </div>
      </div>
    );
  }
}

export default RecommendUserList;

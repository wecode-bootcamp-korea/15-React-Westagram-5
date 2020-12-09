import React from "react";

class MainRight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recommandList: [
        {
          id: 1,
          name: "kim_shh",
          comment: "Follows you",
          icon: "fab fa-earlybirds",
          image: "./images/사람1.png",
        },
        {
          id: 2,
          name: "kim_shh",
          comment: "Follows you",
          icon: "fab fa-earlybirds",
          image: "./images/사람2.png",
        },
        {
          id: 3,
          name: "kim_shh",
          comment: "Follows you",
          icon: "fab fa-earlybirds",
          image: "./images/사람3.png",
        },
        {
          id: 4,
          name: "kim_shh",
          comment: "Follows you",
          icon: "fab fa-earlybirds",
          image: "./images/사람4.png",
        },
        {
          id: 5,
          name: "kim_shh",
          comment: "Follows you",
          icon: "fab fa-earlybirds",
          image: "./images/사람5.png",
        },
        {
          id: 6,
          name: "kim_shh",
          comment: "Follows you",
          icon: "fab fa-earlybirds",
          image: "./images/사람6.png",
        },
      ],
      mode: false,
      num: 1,
    };
  }

  followChange = (mode, index) => {
    const changedList = [...this.state.recommandList];
    changedList[index].mode = !mode;
    this.setState({
      recommandList: changedList,
    });
  };

  render() {
    return (
      <div className="main__right">
        <div className="main__right__myInfo">
          <ul className="myInfo__lists">
            <li className="myInfo__list list__first">
              <div className="myInfo__Image">
                <img src="./images/girss.png" alt="" />
              </div>
            </li>
            <li className="myInfo__list list__second">
              <p>Sexy Gril</p>
              <p>Come on Baby!</p>
            </li>
            <li className="myInfo__list list__third">
              <a className="change" href="#">
                전환
              </a>
            </li>
          </ul>
        </div>
        <div className="main__right__recommend">
          <header class="recommend__header">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </header>
          <div className="recommend__container">
            <ul>
              {this.state.recommandList.map((e, index) => {
                return (
                  <li key={e.id}>
                    <div className="image">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="recommend__box">
                      <p>{e.name}</p>
                      <p onClick={() => this.followChange(e.mode, index)}>
                        {e.mode === true ? "팔로우신청중" : "팔로우"}
                      </p>
                    </div>
                    <div className="follow">
                      <i className={e.icon}></i>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRight;

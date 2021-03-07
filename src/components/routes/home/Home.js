import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <article className="Home__main">
        <h1>
          안녕하세요!!😄
          <br />
          <span>Front-end 개발자 박진모</span>입니다.
        </h1>
        <div>
          <img src="http://placehold.it/400x300" alt="박진모" />
        </div>
      </article>
      <aritcle className="Home__intro">
        <h2>저를 소개합니다!</h2>
        <p>
          안녕하세요 저는 현재 퍼블리셔 1년 경력이 있습니다.
          <br />
          퍼블리셔로 일을 했지만 저는 거기서 더욱 발전을 하고 싶어서 프론트
          영역까지 더 공부를 하고 있습니다.
          <br />
          저의 현재 초점은 javascript,React,node.js입니다.
          <br /> React말고도 다른 라이브러리를 사용 하고 싶어서 vue나 angular도
          현재 공부를 하고 있습니다.
        </p>
      </aritcle>
    </div>
  );
}

export default Home;

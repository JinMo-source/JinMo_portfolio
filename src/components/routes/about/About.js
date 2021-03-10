import React from "react";

function About() {
  return (
    <div>
      <article className="about__Who">
        <aritcle>
          <h2 className="home__intro">저를 소개합니다!</h2>
          <p>
            안녕하세요 저는 현재 퍼블리셔 1년 경력이 있습니다.
            <br />
            일을 하면서 프론트 엔드에 대해 관심이 생겨 javascript,react를 공부를
            하고 있습니다.
            <br />
            저의 현재 공부에 대한 방향은 javascript,React,node.js입니다.
            <br /> 또한 후에 React말고도 다른 라이브러리를 사용하고 Next.js 와
            vue,angular도 배우고 싶습니다.
          </p>
        </aritcle>
      </article>
      <article>
        <p>Skill</p>
        <ul className="about__skill">
          <li>
            <img src="http://placehold.it/200x100" />
          </li>
          <li>
            <img src="http://placehold.it/200x100" />
          </li>
          <li>
            <img src="http://placehold.it/200x100" />
          </li>
          <li>
            <img src="http://placehold.it/200x100" />
          </li>
          <li>
            <img src="http://placehold.it/200x100" />
          </li>
          <li>
            <img src="http://placehold.it/200x100" />
          </li>
        </ul>
      </article>
    </div>
  );
}

export default About;

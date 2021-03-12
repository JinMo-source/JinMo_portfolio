import React from "react";
import "./About.css";
import aboutWho from "../../../public/image/aboutWho.png";
import skill1 from "../../../public/image/skill1.jpg";
import skill2 from "../../../public/image/skill2.jpg";
import skill3 from "../../../public/image/skill3.jpg";
import skill4 from "../../../public/image/skill4.jpg";
import skill5 from "../../../public/image/skill5.jpg";
import skill6 from "../../../public/image/skill6.jpg";
import skill7 from "../../../public/image/skill7.jpg";
import skill8 from "../../../public/image/skill8.jpg";

function About() {
  return (
    <div>
      <div className="about">
        <article className="about__who wrapper">
          <div>
            <p className="about__who__title">Profile</p>
            <p className="about__who__profile">
              이름 : 박진모
              <br />
              나이 : 1998.01.30 (24)
              <br />
              전화번호 : 010-2477-1240
              <br />
              이메일 : qkrwslah123@naver.com
              <br />
              경력 : 웹퍼블리셔 (1년)
              <br />
              취미 : 코딩,게임,음악 감상,영화
              <br />
              Skill : html, css(sass), javascript, node
            </p>
          </div>
          <div>
            <img src={aboutWho} alt="Who" />
          </div>
        </article>
      </div>
      <article className="about__skill">
        <p className="title">Skill</p>
        <ul className="about__skill__flex wrapper">
          <li>
            <img src={skill1} alt="skill" />
          </li>
          <li>
            <img src={skill2} alt="skill" />
          </li>
          <li>
            <img src={skill3} alt="skill" />
          </li>
          <li>
            <img src={skill4} alt="skill" />
          </li>
          <li>
            <img src={skill5} alt="skill" />
          </li>
          <li>
            <img src={skill6} alt="skill" />
          </li>
          <li>
            <img src={skill7} alt="skill" />
          </li>
          <li>
            <img src={skill8} alt="skill" />
          </li>
        </ul>
      </article>
    </div>
  );
}

export default About;

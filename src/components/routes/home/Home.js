import React from "react";
import "./Home.css";
import homeMain from "../../../public/image/homeMain.jpg";
import homeIntro from "../../../public/image/homeIntro.jpg";
import homeMail from "../../../public/image/homeMail.jpg";
// fontawesome
import {
  faBlog,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Email
import emailjs from "emailjs-com";

function Home() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "qkrwslah123",
        "template_nx306ua",
        e.target,
        "user_SkTxLrfkavbKk45ILttM1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("메일이 전송되었습니다.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <article className="home__main">
        <div className="wrapper home__main__flex">
          <h1>
            <span>안녕하세요!!👋</span>
            <br />
            <span>Front-end 개발자 박진모입니다.</span>
            <br />
            👉 저는 개발자입니다.
            <br />
            👉 저는 노력하는 개발자입니다.
            <br />
            👉 저는 꾸준히 하는 개발자입니다.
            <br />
            👉 저는 매일매일 성장하는 개발자입니다.
            <br />
            👉 저는 부족한 개발자이며, 조금씩 부족함을 채우려는 개발자입니다.
          </h1>
          <div className="home__main__img">
            <img src={homeMain} alt="메인 이미지" />
          </div>
        </div>
      </article>
      {/* Intro */}
      <article className="home__intro__article">
        <div className="wrapper">
          <h2 className="home__intro__title title">저를 소개합니다!</h2>
          <div className="home__intro__flex">
            <p className="home__intro__intro">
              안녕하세요 👋
              <br />
              저는 현재 퍼블리셔 1년 경력이 있습니다.
              <br />
              퍼블려셔을 하면서 프론트 엔드에 대해 더욱 알고 싶은 생각이
              많아졌습니다.
              <br />
              현재 저의 주 스킬은 <span>Javscript</span>이며 공부에 대한 방향은
              <span>Javascript,Typescript,React,Node.js</span>를 하고 있습니다.
              <br />
              또한 깊은 지식은 아니지만 개인적으로 사이드 프로젝트을 하면서
              추가적으로 디자인, Back-end을 해보고 있습니다.
              <br />
              <span>#Front-end #Javascript #React #Typescript #nodejs</span>
            </p>
            <div className="home__intro__img">
              <img src={homeIntro} alt="인트로 이미지" />
            </div>
          </div>
        </div>
      </article>
      {/* Contact Me */}
      <article>
        <div className="wrapper">
          <p className="home__contact__title title">Contact Me</p>
          <div className="home__contact__flex">
            <div className="home__contact__info">
              <p className="home__contact__info__info">
                <FontAwesomeIcon icon={faPhoneAlt} className="Email__icon" /> :
                010-2477-1240
                <br />
                <FontAwesomeIcon icon={faEnvelope} className="Email__icon" /> :
                qkrwslah123@naver.com
              </p>
              <div>
                <ul className="home__contact__info__alink">
                  <li>
                    <a href="https://github.com/JinMo-source" alt="깃허브">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="3x"
                        className="Email__icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://p-angi.tistory.com/" alt="블로그">
                      <FontAwesomeIcon
                        icon={faBlog}
                        size="3x"
                        className="Email__icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="home__mail__img">
                <img src={homeMail} alt="Email" />
              </div>
            </div>
            <div className="home__Email">
              <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Home;

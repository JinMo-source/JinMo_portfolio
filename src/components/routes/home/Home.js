import React from "react";
import "./Home.css";

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
    <div className="wrapper">
      <article className="home__Main">
        <h1>
          안녕하세요!!😄
          <br />
          <span>Front-end 개발자 박진모</span>입니다.
        </h1>
        <div>
          <img src="http://placehold.it/400x300" alt="박진모" />
        </div>
      </article>
      {/* Intro */}
      <aritcle className="home__Intro">
        <p>저를 소개합니다!</p>
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
      {/* Contact Me */}
      <article>
        <p>Contact Me</p>
        <div className="home__contact">
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="Email__icon" /> :
            010-2477-1240
            <br />
            <FontAwesomeIcon icon={faEnvelope} className="Email__icon" /> :
            qkrwslah123@naver.com
          </p>
          <div className="home__contact__Fontawesome">
            <ul>
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
          <div className="home__EmailImg">
            <img src="http://placehold.it/425x425" alt="Email" />
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
      </article>
    </div>
  );
}

export default Home;

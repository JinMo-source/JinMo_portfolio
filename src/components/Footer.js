import React from "react";
import { Link } from "react-router-dom";

// fontawesome
import {
  faBlog,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <article>
        <h1>Contact Me</h1>
        <p>
          <FontAwesomeIcon icon={faPhoneAlt} className="footer__icon" /> :
          010-2477-1240
          <br />
          <FontAwesomeIcon icon={faEnvelope} className="footer__icon" /> :
          qkrwslah123@naver.com
        </p>
        <div>
          <ul>
            <li>
              <a href="https://github.com/JinMo-source" alt="깃허브">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="3x"
                  className="footer__icon"
                />
              </a>
            </li>
            <li>
              <a href="https://p-angi.tistory.com/" alt="블로그">
                <FontAwesomeIcon
                  icon={faBlog}
                  size="3x"
                  className="footer__icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default Footer;

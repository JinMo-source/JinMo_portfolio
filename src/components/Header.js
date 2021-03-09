import React from "react";
import { Link } from "react-router-dom";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
  return (
    <header className="nav__Header">
      <nav className="wrapper">
        <ul className="nav__list">
          <li>
            <Link className="Link_css" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="Link_css" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="Link_css" to="/about">
              Projects
            </Link>
          </li>
          <li className="nav__fontawesome">
            <a href="https://github.com/JinMo-source" alt="깃허브">
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                className="Header__icon"
              />
            </a>
          </li>
          <li className="nav__fontawesome">
            <a href="https://p-angi.tistory.com/" alt="블로그">
              <FontAwesomeIcon
                icon={faBlog}
                size="1x"
                className="Header__icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>projects</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

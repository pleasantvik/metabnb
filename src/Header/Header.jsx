import React from "react";
// import { ReactComponent as Empty_Aggregator } from '@/assets/svgs/empty_aggregators.svg'
import "./Header.scss";

import { ReactComponent as Meta } from "../asset/meta.svg";

function Header(props) {
  return (
    <nav className="nav">
      <div className="header__logo">
        <Meta />
      </div>
      <ul className="header__ul">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="place">The Place</a>
        </li>
        <li>
          <a href="btn">button</a>
        </li>
      </ul>
      <a href="btn" className="header__btn">
        Connect
      </a>
    </nav>
  );
}

export default Header;

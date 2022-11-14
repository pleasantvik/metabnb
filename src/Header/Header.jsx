import React, { useState } from "react";
import "./Header.scss";

import { ReactComponent as Meta } from "../asset/meta.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header(props) {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };
  return (
    <nav className={`nav ${showNav ? "nav-open" : ""}`}>
      <div className="header__logo">
        <Meta />
      </div>
      <ul className="header__ul">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">Place to stay</a>
        </li>
        <li>
          <a href="place">NFTS</a>
        </li>
        <li>
          <a href="community">Community</a>
        </li>
      </ul>
      <a href="btn" className="header__btn">
        Connect wallet
      </a>
      <button class="btn-mobile-nav">
        <AiOutlineMenu className="menu" onClick={handleNav} />
        <AiOutlineClose className="close" onClick={handleNav} />
      </button>
    </nav>
  );
}

export default Header;

import React, { useState } from "react";
import "./Header.scss";

import metaLogo from "../asset/meta-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header(props) {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`header ${showNav ? "nav-open" : ""}`}>
      <Link to="/" className="header__logo">
        <img src={metaLogo} alt="metabnb logo" className="logo" />
      </Link>
      <nav className={`nav `}>
        <ul className="nav__list">
          <li>
            <Link to="/" className="nav__link" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="place" className="nav__link" onClick={handleNav}>
              Place to stay
            </Link>
          </li>
          <li>
            <Link to="nft" className="nav__link" onClick={handleNav}>
              NFTS
            </Link>
          </li>
          <li>
            <Link to="community" className="nav__link" onClick={handleNav}>
              Community
            </Link>
          </li>
          <button className="connect nav__link cta" onClick={props.onOpen}>
            Connect wallet
          </button>
        </ul>
      </nav>

      <button class="btn-mobile-nav">
        <AiOutlineMenu
          style={{
            height: "4rem",
            width: "4rem",
            border: "none",
            outline: "none",
          }}
          className="menu"
          onClick={handleNav}
        />
        <AiOutlineClose
          style={{
            height: "4rem",
            width: "4rem",
            border: "none",
            outline: "none",
          }}
          className="close"
          onClick={handleNav}
        />
      </button>
    </header>
  );
}

export default Header;

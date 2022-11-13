import React from "react";
import { ReactComponent as HomeImg } from "../asset/home-img.svg";
import "./Home.scss";

function Home(props) {
  return (
    <section className="hero-content">
      <div className="hero-text">
        <h1 className="heading">
          Rent a <strong className="purple">Place</strong> away from <br />
          <strong className="purple"> Home</strong> in the
          <strong className="purple"> Metaverse</strong>
        </h1>
        <p className="text">
          We provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <form className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for location"
          />
          <button className="search-button btn-small">Search</button>
        </form>
      </div>
      <div className="hero-image">
        <HomeImg />
      </div>
    </section>
  );
}

export default Home;

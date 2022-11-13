import React from "react";
import "./Adventure.scss";
import Card from "../Card/Card";
import { ReactComponent as Grid1 } from "../asset/grid-img-1.svg";
import { ReactComponent as Grid2 } from "../asset/grid-img-2.svg";
import { ReactComponent as Grid3 } from "../asset/grid-img-3.svg";
import { ReactComponent as Grid4 } from "../asset/grid-img-4.svg";
import { ReactComponent as Grid5 } from "../asset/grid-img-5.svg";
import { ReactComponent as Grid6 } from "../asset/grid-img-6.svg";
import { ReactComponent as Grid7 } from "../asset/grid-img-7.svg";
import { ReactComponent as Grid8 } from "../asset/grid-img-8.svg";

function Adventure(props) {
  return (
    <section className="adventure__inspiration">
      <h1 className="secondary-heading">Inspiration for your next Adventure</h1>
      <div className="grid">
        <Card img={<Grid1 style={{ padding: "1rem" }} />} />
        <Card img={<Grid2 style={{ padding: "1rem" }} />} />
        <Card img={<Grid3 style={{ padding: "1rem" }} />} />
        <Card img={<Grid4 style={{ padding: "1rem" }} />} />
        <Card img={<Grid5 style={{ padding: "1rem" }} />} />
        <Card img={<Grid6 style={{ padding: "1rem" }} />} />
        <Card img={<Grid7 style={{ padding: "1rem" }} />} />
        <Card img={<Grid8 style={{ padding: "1rem" }} />} />
      </div>
    </section>
  );
}

export default Adventure;

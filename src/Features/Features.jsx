import React from "react";
import { ReactComponent as Token } from "../asset/token-logo.svg";
import { ReactComponent as Metamask } from "../asset/metamask-logo.svg";
import { ReactComponent as Opensea } from "../asset/opensea-logo.svg";

function Features(props) {
  return (
    <div className="featuredIn">
      <div class="features">
        <Token />
        <Metamask />
        <Opensea />
      </div>
    </div>
  );
}

export default Features;

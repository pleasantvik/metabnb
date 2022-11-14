import React from "react";
import "./Nft.scss";
import { ReactComponent as NftImg } from "../asset/nft-img.svg";

function Nft(props) {
  return (
    <section className="nft">
      <div className="nft-text">
        <h1 className="nft-heading">Metabnb NFTs</h1>
        <p className="nft-info">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>
        <button className="nft-btn cta">Learn more</button>
      </div>
      <div className="nft-img">
        <NftImg className="nft-img" />
      </div>
    </section>
  );
}

export default Nft;

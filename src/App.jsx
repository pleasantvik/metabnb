import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Features from "./Features/Features";
import Adventure from "./Adventure/Adventure";
import Nft from "./Nft/Nft";
import Footer from "./Footer/Footer";
import Place from "./Pages/Place";
import { Modal } from "./Modal/Modal";
import { Route, Switch } from "react-router-dom";
import Community from "./Pages/Community";
import Metaverse from "./Pages/Metaverse";
import { ReactComponent as CloseIcon } from "./asset/closeIcon.svg";
import { ReactComponent as MeatmaskIcon } from "./asset/metamaskLogo.svg";
import { ReactComponent as Chevron } from "./asset/chevron.svg";
import walletimg from "./asset/wallectimg.png";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModalHandler = () => {
    setModalIsOpen(true);
  };

  const hideModalHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <Header onOpen={showModalHandler} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
            <Features />
            <Adventure />
            <Nft />
          </Route>
          <Route path="/place">
            <Place />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/nft">
            <Metaverse />
          </Route>
        </Switch>
      </main>
      <Footer />
      {modalIsOpen && (
        <Modal onClose={hideModalHandler}>
          <div className="modal-heading">
            <h2 className="title">Connect Wallet</h2>
            <CloseIcon
              onClick={hideModalHandler}
              style={{ cursor: "pointer" }}
            />
          </div>
          <span className="sub-title">Choose your preffered wallet:</span>
          <div className="wallet-type">
            <div className="wallet-box">
              <div>
                <MeatmaskIcon />
                <p className="btn-text">Metamask</p>
              </div>
              <Chevron />
            </div>
          </div>
          <div className="wallet-type">
            <div className="wallet-box">
              <div>
                <img
                  src={walletimg}
                  alt="walleticon"
                  // style={{ marginRight: "1rem" }}
                />
                <p className="btn-text">WalletConnect</p>
              </div>
              <Chevron />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;

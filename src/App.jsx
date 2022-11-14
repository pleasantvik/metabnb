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
          <h1 onClick={hideModalHandler}>Hello</h1>
          <p>I am a modal window</p>
        </Modal>
      )}
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Features from "./Features/Features";
import Adventure from "./Adventure/Adventure";
import Nft from "./Nft/Nft";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Features />
      <Adventure />
      <Nft />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Intro } from "./pages/Intro/Intro";
import "./App.scss";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Brews Of BrewDog</h1>
      <BrowserRouter basename="">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beer/:ID" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

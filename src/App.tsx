import "./App.scss";
import SideFilter from "./containers/SideFliter/SideFilter";
import TileContainer from "./containers/TileContainer/TileContainer";
import beers from "./data/beers";

function App() {
  return (
    <div className="app">
      <h1>Brews Of BrewDog</h1>
      <SideFilter />
      <TileContainer beers={beers} />
    </div>
  );
}

export default App;

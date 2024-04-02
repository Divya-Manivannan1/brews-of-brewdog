import Tile from "../../components/Tile/Tile";
import { Beer } from "../../types/types";
import "./TileContainer.scss";

type TileContainerProps = {
  beers: Beer[];
};

const TileContainer = ({ beers }: TileContainerProps) => {
  return (
    <div className="tile-container">
      {beers.map((beer, index) => (
        <Tile beer={beer} key={index} />
      ))}
    </div>
  );
};

export default TileContainer;

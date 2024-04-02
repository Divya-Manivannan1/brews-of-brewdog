import Tile from "../../components/Tile/Tile";
import { Beer } from "../../types/types";
import "./TileContainer.scss";

type TileContainerProps = {
  beers: Beer[];
};

const TileContainer = ({ beers }: TileContainerProps) => {
  return (
    <div className="tile-container">
      {beers.map((beer) => (
        <Tile name={beer.name} image={beer.image_url} tagLine={beer.tagline} />
      ))}
    </div>
  );
};

export default TileContainer;

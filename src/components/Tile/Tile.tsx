import { Beer } from "../../types/types";
import Bubble from "../Bubble/Bubble";
import "./Tile.scss";

type TileProps = {
  beer: Beer;
  brewedSince: string;
};

const Tile = ({ beer, brewedSince }: TileProps) => {
  const { name, tagline, image_url, abv, ibu, ph, description } = beer;

  return (
    <div className="tile">
      <div className="tile__image-container">
        <img className="tile__image" src={image_url} alt={name} />
      </div>
      <div className="tile__content">
        <h2 className="tile__heading">{name}</h2>
        <p className="tile__tagLine">{tagline}</p>
        <div className="tile__bubble-container">
          <Bubble label="ABV%" value={abv} />
          <Bubble label="ibu" value={ibu} />
          <Bubble label="ph" value={ph} />
        </div>
        <p className="tile__description">{description}</p>
        <p className="tile__year">{`Brewed since ${brewedSince}`}</p>
      </div>
    </div>
  );
};

export default Tile;

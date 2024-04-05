import { Link } from "react-router-dom";
import { Beer } from "../../types/types";
import Bubble from "../Bubble/Bubble";
import "./Tile.scss";

type TileProps = {
  beer: Beer;
  brewedSince: string;
};

const Tile = ({ beer, brewedSince }: TileProps) => {
  const { name, tagline, image_url, abv, ibu, ph, id } = beer;

  return (
    <div className="tile">
      <div className="tile__image-container">
        <Link to={`/beer/${id}`}>
          <img
            className="tile__image"
            src={image_url ? image_url : ""}
            alt={`Image of ${name}`}
          />
        </Link>
      </div>
      <div className="tile__content">
        <Link to={`/beer/${id}`} className="tile__heading">
          <h2 className="tile__heading">{name}</h2>
        </Link>
        <p className="tile__tagLine">{tagline}</p>
        <div className="tile__bubble-container">
          {abv ? <Bubble label="ABV%" value={abv} /> : <></>}
          {ibu ? <Bubble label="ibu" value={ibu} /> : <></>}
          {ph ? <Bubble label="ph" value={ph} /> : <></>}
        </div>
        <p className="tile__year">{`Brewed since ${brewedSince}`}</p>
      </div>
    </div>
  );
};

export default Tile;

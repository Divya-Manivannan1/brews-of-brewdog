import { Beer } from "../../types/types";
import Bubble from "../Bubble/Bubble";
import "./Tile.scss";

type TileProps = {
  beer: Beer;
};

const Tile = ({ beer }: TileProps) => {
  const { name, tagline, image_url, abv, ibu, ph, description, first_brewed } =
    beer;

  const convertDate = (oldFormat: string): string => {
    if (!oldFormat.includes("/")) return "";
    const dateArray: string[] = oldFormat.split("/");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(+dateArray[1], +dateArray[0]);
    const newFormat = `${months[date.getMonth()]} of ${date.getFullYear()}`;
    return newFormat;
  };

  const brewedSince: string = convertDate(first_brewed);

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
        <p className="tile__year">Brewed since : {brewedSince}</p>
      </div>
    </div>
  );
};

export default Tile;

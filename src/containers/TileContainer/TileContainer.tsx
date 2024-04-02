import Tile from "../../components/Tile/Tile";
import { Beer } from "../../types/types";
import "./TileContainer.scss";

type TileContainerProps = {
  beers: Beer[];
};

const TileContainer = ({ beers }: TileContainerProps) => {
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
  return (
    <div className="tile-container">
      {beers.map((beer, index) => {
        return (
          <Tile
            beer={beer}
            brewedSince={convertDate(beer.first_brewed)}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TileContainer;

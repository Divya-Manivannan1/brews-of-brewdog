import "./Tile.scss";

type TileProps = {
  name: string;
  image: string;
  tagLine: string;
};

const Tile = ({ name, image, tagLine }: TileProps) => {
  return (
    <div className="tile">
      <img className="tile__image" src={image} alt={name} />
      <div className="tile__content">
        <h2 className="tile__heading">{name}</h2>
        <p className="tile__tagLine">{tagLine}</p>
      </div>
    </div>
  );
};

export default Tile;

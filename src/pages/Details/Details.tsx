import { useParams } from "react-router-dom";
import "./Details.scss";
import { Beer } from "../../types/types";
import beerData from "../../data/beerData";
import Bubble from "../../components/Bubble/Bubble";

export const Details = () => {
  const { beerID } = useParams();

  const beer: Beer | undefined = beerData.find(
    (beer) => beer.id === Number(beerID)
  );

  if (beer === undefined) return <p>Beer not found</p>;
  else {
    const {
      name,
      tagline,
      first_brewed,
      image_url,
      abv,
      ibu,
      ph,
      description,
      ebc,
      srm,
      attenuation_level,
      target_fg,
      target_og,
      food_pairing,
      brewers_tips,
      contributed_by,
    } = beer;

    return (
      <div className="details">
        <div className="details__image-container">
          <img
            className="details__image"
            src={image_url ? image_url : ""}
            alt={`Image of ${name}`}
          />
        </div>
        <div className="details__content">
          <h2 className="details__title">{name}</h2>
          <p className="details__tagline">{tagline}</p>
          <p className="details__description">{description}</p>
          <p className="details__year">{`First brewed ${first_brewed}`}</p>
        </div>
        <div className="details__bubble-container">
          {abv ? <Bubble label="ABV%" value={abv} /> : <></>}
          {ibu ? <Bubble label="ibu" value={ibu} /> : <></>}
          {ph ? <Bubble label="ph" value={ph} /> : <></>}
          {ebc ? <Bubble label="ebc" value={ebc} /> : <></>}
          {srm ? <Bubble label="srm" value={srm} /> : <></>}
          {attenuation_level ? (
            <Bubble label="attenuation" value={attenuation_level} />
          ) : (
            <></>
          )}
          {target_fg ? <Bubble label="target fg" value={target_fg} /> : <></>}
          {target_og ? <Bubble label="target og" value={target_og} /> : <></>}
        </div>
        <div className="details__content">
          <h3 className="details__heading">Suggested food pairings</h3>
          <p className="details__pairing">{food_pairing}</p>
          <h3 className="details__heading">Brewer's tips</h3>
          <p className="details__tips">{brewers_tips}</p>
          <p className="details__brewer">{`Info contributed by ${contributed_by}`}</p>
        </div>
        <div className="details__bubble-container"></div>
      </div>
    );
  }
};

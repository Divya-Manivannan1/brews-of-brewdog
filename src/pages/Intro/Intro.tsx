import { Link } from "react-router-dom";
import "./Intro.scss";
import { ChangeEvent, useState } from "react";

export const Intro = () => {
  const [isAbove18, setIsAbove18] = useState<boolean>(false);

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const age: number = +event.currentTarget.value;
    age > 18 ? setIsAbove18(true) : setIsAbove18(false);
  };

  let linkUrl: string = "";
  isAbove18 ? (linkUrl = "/Home") : (linkUrl = "/ComeBackLater");

  return (
    <div className="intro">
      <p className="intro__question">How old are you?</p>
      <input className="intro__age" type="number" onChange={handleAgeChange} />
      <Link to={linkUrl} className="intro__link">
        <p>GO!</p>
      </Link>
    </div>
  );
};

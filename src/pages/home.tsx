import { FormEvent, useState } from "react";
import SideFilter from "../containers/SideFliter/SideFilter";
import TileContainer from "../containers/TileContainer/TileContainer";
import beers from "../data/beers";
import { Beer } from "../types/types";

type SearchObject = {
  abv: "Any" | "High" | "Medium" | "Low";
  ph: "Any" | "High" | "Medium" | "Low";
  brewedSince: number;
};

function Home() {
  const [searchInput, setSearchInput] = useState<SearchObject>({
    abv: "Any",
    ph: "Any",
    brewedSince: 1950,
  });

  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    const abv = event.currentTarget.abv.value;
    const ph = event.currentTarget.ph.value;
    const brewedSince = +event.currentTarget["first-brewed"].value;
    setSearchInput({ abv, ph, brewedSince });
  };

  const checkBeerForDisplayed = (
    beer: Beer,
    searchInput: SearchObject
  ): boolean => {
    let isABV: boolean = false,
      isPH: boolean = false,
      isYear: boolean = false;
    switch (searchInput.abv) {
      case "High":
        if (beer.abv >= 6) isABV = true;
        break;
      case "Medium":
        if (beer.abv < 6 && beer.abv > 4) isABV = true;
        break;
      case "Low":
        if (beer.abv < 4) isABV = true;
        break;
      default:
        isABV = true;
        break;
    }
    switch (searchInput.ph) {
      case "High":
        if (beer.ph < 4) isPH = true;
        break;
      case "Medium":
        if (beer.ph > 4 && beer.ph < 5) isPH = true;
        break;
      case "Low":
        if (beer.ph > 5) isPH = true;
        break;
      default:
        isPH = true;
        break;
    }
    const brewedYear = new Date(beer.first_brewed.split("/")[1]);
    if (brewedYear.getFullYear() >= searchInput.brewedSince) isYear = true;
    console.log(`abv${isABV} && ph${isPH} && year${isYear}`);
    return isABV && isPH && isYear;
  };

  const filteredBeers: Beer[] = beers.filter((beer) =>
    checkBeerForDisplayed(beer, searchInput)
  );

  return (
    <div className="home">
      <img src="" alt="filter" />
      <SideFilter
        handleChange={handleInput}
        ph={searchInput.ph}
        abv={searchInput.abv}
        year={searchInput.brewedSince}
      />
      <TileContainer beers={filteredBeers} />
    </div>
  );
}

export default Home;

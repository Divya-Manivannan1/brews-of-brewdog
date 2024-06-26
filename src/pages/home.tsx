import { FormEvent, useState } from "react";
import SideFilter from "../containers/SideFliter/SideFilter";
import TileContainer from "../containers/TileContainer/TileContainer";
import beerData from "../data/beerData";
import { Beer } from "../types/types";

const Home = () => {
  //type casting the search object
  type SearchObject = {
    name: string;
    abv: "Any" | "High" | "Medium" | "Low";
    ph: "Any" | "High" | "Medium" | "Low";
    brewedSince: number;
  };

  //creating a state with the search object
  const [searchInput, setSearchInput] = useState<SearchObject>({
    name: "",
    abv: "Any",
    ph: "Any",
    brewedSince: 1950,
  });

  //callback function to handle changes in the form: sets the search object state
  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    const name = event.currentTarget.Name.value;
    const abv = event.currentTarget.abv.value;
    const ph = event.currentTarget.ph.value;
    const brewedSince = +event.currentTarget["first-brewed"].value;
    setSearchInput({ name, abv, ph, brewedSince });
  };

  //checks if a beer needs to be displayed based on the field inputs
  const checkBeerForDisplayed = (
    beer: Beer,
    searchInput: SearchObject
  ): boolean => {
    //if the name condition is not satisfied return false
    if (!beer.name.toLowerCase().includes(searchInput.name.toLowerCase()))
      return false;

    //if the brewed since consition fails, returns false
    if (beer.first_brewed.includes("/")) {
      const brewedYear = new Date(beer.first_brewed.split("/")[1]);
      if (brewedYear.getFullYear() < searchInput.brewedSince) return false;
    } else if (+beer.first_brewed < searchInput.brewedSince) return false;

    let isABV: boolean = false,
      isPH: boolean = false;

    //checking for abv
    if (beer.abv) {
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
      }
    }
    if (searchInput.abv == "Any") isABV = true;

    //checking for acidity
    if (beer.ph) {
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
      }
    }
    if (searchInput.ph == "Any") isPH = true;

    const isFiltered: boolean = isABV && isPH;
    return isFiltered;
  };

  const filteredBeers: Beer[] = beerData.filter((beer) =>
    checkBeerForDisplayed(beer, searchInput)
  );

  return (
    <div className="home">
      <SideFilter
        handleChange={handleInput}
        ph={searchInput.ph}
        abv={searchInput.abv}
        year={searchInput.brewedSince}
      />
      <TileContainer beers={filteredBeers} />
    </div>
  );
};

export default Home;

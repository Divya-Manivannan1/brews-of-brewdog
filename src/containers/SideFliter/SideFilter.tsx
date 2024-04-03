import { ChangeEventHandler, useState } from "react";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import RangeInput from "../../components/RangeInput/RangeInput";
import "./SideFilter.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

type SideFilterProps = {
  handleChange: ChangeEventHandler<HTMLFormElement>;
  ph: "Any" | "High" | "Medium" | "Low";
  abv: "Any" | "High" | "Medium" | "Low";
  year: number;
};

const SideFilter = ({ handleChange, abv, ph, year }: SideFilterProps) => {
  const [isSideFilterOpen, setIsSideFilterOpen] = useState<boolean>(false);

  const toggleIsFilterOpen = () => {
    setIsSideFilterOpen(!isSideFilterOpen);
  };

  let divClassName: string = "side-filter__contents";

  if (isSideFilterOpen) {
    divClassName = divClassName.concat(" open");
  }
  console.log(isSideFilterOpen);
  console.log(divClassName);

  return (
    <div className="side-filter">
      <img
        src=""
        alt="filter"
        className="side-filter__icon"
        onClick={toggleIsFilterOpen}
      />
      <div className={divClassName}>
        <form onChange={handleChange}>
          <SearchBar id={"Name"} />
          <RadioButtons
            selected={abv}
            options={["Any", "High", "Medium", "Low"]}
            label={"ABV%"}
            name={"abv"}
          />
          <RadioButtons
            selected={ph}
            options={["Any", "High", "Medium", "Low"]}
            label={"Acidity"}
            name={"ph"}
          />
          <RangeInput
            min={1950}
            max={2020}
            label={"First Brewed"}
            id={"first-brewed"}
            value={year}
          />
        </form>
      </div>
    </div>
  );
};

export default SideFilter;

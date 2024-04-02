import { ChangeEventHandler } from "react";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import RangeInput from "../../components/RangeInput/RangeInput";
import "./SideFilter.scss";

type SideFilterProps = {
  handleChange: ChangeEventHandler<HTMLFormElement>;
  ph: "Any" | "High" | "Medium" | "Low";
  abv: "Any" | "High" | "Medium" | "Low";
  year: number;
};

const SideFilter = ({ handleChange, abv, ph, year }: SideFilterProps) => {
  return (
    <div className="side-filter">
      <img src="" alt="close filter" className="side-filter__close-icon" />
      <h2 className="side-filter__title">
        Please selected the desired filter options
      </h2>
      <form onChange={handleChange}>
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
  );
};

export default SideFilter;

import RadioButtons from "../../components/RadioButtons/RadioButtons";
import RangeInput from "../../components/RangeInput/RangeInput";
import "./SideFilter.scss";

const SideFilter = () => {
  return (
    <div className="side-filter">
      <img src="" alt="close filter" className="side-filter__close-icon" />
      <h2 className="side-filter__title">
        Please selected the desired filter options
      </h2>
      <form>
        <RadioButtons
          selected={"Any"}
          options={["Any", "High", "Medium", "Low"]}
          label={"ABV%"}
          name={"abv"}
        />
        <RadioButtons
          selected={"Any"}
          options={["Any", "High", "Medium", "Low"]}
          label={"Acidity"}
          name={"ph"}
        />
        <RangeInput
          min={1990}
          max={2020}
          label={"First Brewed"}
          id={"first-brewed"}
          value={0}
        />
      </form>
    </div>
  );
};

export default SideFilter;

import { ChangeEventHandler } from "react";
import "./RadioButtons.scss";

type RadioButtonProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  selected: string;
  options: string[];
  label: string;
  name: string;
};

const RadioButtons = ({
  onChange,
  selected,
  options,
  label,
  name,
}: RadioButtonProps) => {
  return (
    <div className="radio-buttons">
      <p>{label}</p>
      {options.map((option, index) => (
        <div key={"radio-button" + option + index}>
          <input
            type="radio"
            name={name}
            id={option}
            value={option}
            checked={option === selected}
            onChange={onChange}
          />
          <label className="radio-buttons__label" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;

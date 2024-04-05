import "./RangeInput.scss";

type RangeInputProps = {
  min: number;
  max: number;
  label: string;
  id: string;
  value: number;
};

const RangeInput = ({ min, max, label, id, value }: RangeInputProps) => {
  return (
    <div className="range-input">
      <label htmlFor={id}>{`${label}: ${value}`}</label>
      <input id={id} type="range" min={min} max={max} defaultValue={value} />
    </div>
  );
};

export default RangeInput;

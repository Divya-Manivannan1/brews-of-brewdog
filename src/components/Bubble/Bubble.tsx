import "./Bubble.scss";

type BubbleProps = {
  label: string;
  value: number;
};

const Bubble = ({ label, value }: BubbleProps) => {
  return (
    <div className="bubble">
      <p className="bubble__label">{label}</p>
      <p className="bubble__value">{value}</p>
    </div>
  );
};

export default Bubble;

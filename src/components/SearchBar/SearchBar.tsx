import "./SearchBar.scss";

type SearchBarProps = {
  id: string;
};

const SearchBar = ({ id }: SearchBarProps) => {
  return (
    <div>
      <label className="input-label" htmlFor={id}>
        {`Search by ${id.toLowerCase()}:`}
      </label>
      <input
        type="text"
        id={id}
        autoComplete="off"
        className="input-bar"
        placeholder={`${id}...`}
      ></input>
    </div>
  );
};

export default SearchBar;

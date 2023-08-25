import { StyledFilter } from "./StyledFilter";

export const Filter = ({ phoneFilter, changeFilter }) => {
  return (
    <StyledFilter>
      <label>
        Find contacts by name
        <input
          onChange={evt => changeFilter(evt.target.value)}
          value={phoneFilter}
        ></input>
      </label>
    </StyledFilter>
  );
};

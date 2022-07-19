import React from "react";
import { shape, func, instanceOf } from "prop-types";
import OptionsList from "./optionList.json";
import "./dialog.css";

const iconOptions = ["All", "Filled", "Outlined"];
const EosForm = ({
  inputField,
  searchCategory,
  searchTheme,
  handleOnChange,
  onSearch,
}) => {
  const addOptions = ["All", ...OptionsList];
  const options = addOptions.map((el) => (
    <option value={el} key={el}>
      {el.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      )}
    </option>
  ));

  return (
    <div>
      <label htmlFor="searchInput">
        <div className="label">
          <span>Search icons</span>
        </div>
      </label>
      <div className="input-box" id="searchInput">
        <input
          ref={inputField}
          type="search"
          id="searchInput"
          placeholder="Search..."
          onChange={handleOnChange}
        />
      </div>
      <div className="select-container">
        <label htmlFor="category">
          <div className="label">
            <span>Category</span>
          </div>
          <select
            value={addOptions[0]}
            className="select-tag"
            ref={searchCategory}
            id="category"
            onChange={onSearch}
          >
            {options}
          </select>
        </label>
        <label htmlFor="theme">
          <div className="label">
            <span>Theme</span>
          </div>
          <select
            value={iconOptions[1]}
            className="select-tag"
            ref={searchTheme}
            onChange={onSearch}
          >
            {iconOptions.map((iconOption) => (
              <option key={iconOption} value={iconOption}>
                {iconOption}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

EosForm.propTypes = {
  inputField: shape({ current: instanceOf(HTMLInputElement) }).isRequired,
  searchCategory: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  searchTheme: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  handleOnChange: func.isRequired,
  onSearch: func.isRequired,
};
export default EosForm;

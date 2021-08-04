import React from "react";
import { shape, func, instanceOf } from "prop-types";
import { EOS_CANCEL_OUTLINED } from "eos-icons-react";
import OptionsList from "./optionList.json";
import "./dialog.css";

const iconOptions = ["Outlined", "Filled"];
const EosForm = ({
  inputField,
  searchCategory,
  searchTheme,
  handleKeyUp,
  onSearch,
  clearValue,
}) => {
  const addOptions = ["all", ...OptionsList];
  const options = addOptions.map((el) => (
    <option value={el} key={el}>
      {el}
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
          type="text"
          id="searchInput"
          placeholder="Search..."
          onKeyUp={handleKeyUp}
        />
        <div onClick={clearValue}>
          <EOS_CANCEL_OUTLINED />
        </div>
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
            value={iconOptions[0]}
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
      <button type="button" className="search" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

EosForm.propTypes = {
  inputField: shape({ current: instanceOf(HTMLInputElement) }).isRequired,
  searchCategory: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  searchTheme: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  handleKeyUp: func.isRequired,
  onSearch: func.isRequired,
  clearValue: func.isRequired,
};
export default EosForm;

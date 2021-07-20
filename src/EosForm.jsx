import React from "react";
import { any, func } from "prop-types";
import OptionsList from "./optionList.json";
import "./dialog.css";

const EosForm = ({
  inputField,
  searchCategory,
  searchTheme,
  handleKeyUp,
  onSearch,
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
        <input
          ref={inputField}
          type="text"
          id="searchInput"
          placeholder="Search..."
          onKeyUp={handleKeyUp}
        />
      </label>
      <div className="select-container">
        <select
          value={addOptions[0]}
          className="select-tag"
          ref={searchCategory}
        >
          {options}
        </select>
        <select value="outlined" className="select-tag" ref={searchTheme}>
          <option key="outlined">Outlined</option>
          <option key="filled">Filled</option>
        </select>
      </div>
      <button type="button" className="search" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

EosForm.propTypes = {
  inputField: any.isRequired,
  searchCategory: any.isRequired,
  searchTheme: any.isRequired,
  handleKeyUp: func.isRequired,
  onSearch: func.isRequired,
};
export default EosForm;

import React from "react";
import { any, func, element } from "prop-types";
import EosForm from "./EosForm";

const FormHolder = ({
  helperText,
  inputField,
  handleKeyUp,
  onSearch,
  searchTheme,
  searchCategory,
  iconOptions,
}) => (
  <div className="iconDialog">
    <h1 className="h1">
      <span>EOS</span>
    </h1>
    <hr />
    <p>
      Search for icons from the EOS collection or copy from one of the options
      below.(Click on the icon to copy it)
    </p>
    {helperText}
    <EosForm
      inputField={inputField}
      handleKeyUp={handleKeyUp}
      onSearch={onSearch}
      searchTheme={searchTheme}
      searchCategory={searchCategory}
    />
    {iconOptions}
  </div>
);

FormHolder.propTypes = {
  helperText: element.isRequired,
  inputField: any.isRequired,
  searchCategory: any.isRequired,
  searchTheme: any.isRequired,
  handleKeyUp: func.isRequired,
  onSearch: func.isRequired,
  iconOptions: element.isRequired,
};
export default FormHolder;

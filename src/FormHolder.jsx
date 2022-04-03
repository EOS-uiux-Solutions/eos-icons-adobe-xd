import React from "react";
import { func, string, shape, instanceOf, node } from "prop-types";
import EosForm from "./EosForm";

const FormHolder = ({
  helperText,
  inputField,
  handleOnChange,
  onSearch,
  searchTheme,
  searchCategory,
  clearValue,
  iconOptions = null,
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
    <p>{helperText}</p>
    <EosForm
      inputField={inputField}
      handleOnChange={handleOnChange}
      onSearch={onSearch}
      searchTheme={searchTheme}
      searchCategory={searchCategory}
      clearValue={clearValue}
    />
    {iconOptions}
  </div>
);

FormHolder.propTypes = {
  helperText: string.isRequired,
  inputField: shape({ current: instanceOf(HTMLInputElement) }).isRequired,
  searchCategory: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  searchTheme: shape({ current: instanceOf(HTMLSelectElement) }).isRequired,
  handleOnChange: func.isRequired,
  onSearch: func.isRequired,
  clearValue: func.isRequired,
  iconOptions: node,
};
FormHolder.defaultProps = {
  iconOptions: null,
};
export default FormHolder;

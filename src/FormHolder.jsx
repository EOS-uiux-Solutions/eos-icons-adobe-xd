import React from "react";
import { func, string, shape, instanceOf, node } from "prop-types";
import EosForm from "./EosForm";
import Logo from "./images/Logo.png";

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
    <h1 style={{ padding: "5px 0px" }}>
      <img src={Logo} alt="Company Logo" style={{ width: "125px" }} />
    </h1>
    <hr />
    <p>
      Search for icons from the EOS collection or copy from one of the options
      below.
      <br />
      <span style={{ fontWeight: "bold" }}>(Click on the icon to copy it)</span>
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

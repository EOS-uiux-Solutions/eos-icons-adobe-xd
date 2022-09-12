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
    <div className="eos-info-container">
      <h1 style={{ padding: "5px 0px" }}>
        <img src={Logo} alt="Company Logo" style={{ width: "125px" }} />
      </h1>
      <div className="eos-info">
        <br />
        <br />
        <br />
        Open source, customisable, including all of Material icons.
        <br />
        <br />
        For more information, visit :{" "}
        <a href="https://eos-icons.com" target="_blank" rel="noreferrer">
          https://eos-icons.com
        </a>
        <table style={{ fontSize: "12px", width: "100%", padding: "10px" }}>
          <tr>
            <td>
              <span>
                author :{" "}
                <a
                  href="https://eosdesignsystem.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  EOS UI/UX
                </a>
              </span>
            </td>
            <td>
              <p>license : MIT</p>
            </td>
          </tr>
          <tr>
            <td> version : 1.0.0</td>
            <td>
              {" "}
              <a
                href="https://github.com/EOS-uiux-Solutions/"
                target="_blank"
                rel="noreferrer"
              >
                Report a bug
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://slack.eosdesignsystem.com/"
                target="_blank"
                rel="noreferrer"
              >
                Join us on Slack
              </a>
            </td>
            <td>
              <a
                href="https://www.npmjs.com/package/eos-icons"
                target="_blank"
                rel="noreferrer"
              >
                EOS Icons npm
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
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

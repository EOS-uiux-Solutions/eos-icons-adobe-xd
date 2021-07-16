import React from "react";
import { any } from "prop-types";
import "./dialog.css";

const IconBox = ({ option, iconDivs }) => (
  <div key={option}>
    <div className="category-container">
      <span>{option}</span>
    </div>
    <div className="image-box">{iconDivs}</div>
  </div>
);

IconBox.propTypes = {
  option: any.isRequired,
  iconDivs: any.isRequired,
};

export default IconBox;

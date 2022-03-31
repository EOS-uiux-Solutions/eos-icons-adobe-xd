import React from "react";
import { string, arrayOf, func, shape } from "prop-types";
import "./dialog.css";

const IconDiv = ({ EOSReactIcon, copyToClipboard, displayName }) => (
  <div
    className="image-container"
    onClick={() => {
      copyToClipboard(EOSReactIcon({ size: "xxxl" }));
    }}
  >
    <div className="text-container">
      <span className="image-container-text">{displayName}</span>
    </div>
    {EOSReactIcon({ size: "xl" })}
  </div>
);

IconDiv.propTypes = {
  EOSReactIcon: func.isRequired,
  copyToClipboard: func.isRequired,
  displayName: string.isRequired,
};
const IconBox = ({ option, icons, copyToClipboard }) => {
  const iconDivs = icons.map(({ EOSReactIcon, name, displayName }) => (
    <IconDiv
      key={name}
      copyToClipboard={copyToClipboard}
      EOSReactIcon={EOSReactIcon}
      displayName={displayName}
    />
  ));
  return (
    <div key={option}>
      <div className="category-container">
        <span>{option}</span>
      </div>
      <div className="image-box">{iconDivs}</div>
    </div>
  );
};

IconBox.propTypes = {
  option: string.isRequired,
  icons: arrayOf(shape({ EOSReactIcon: func, name: string })).isRequired,
  copyToClipboard: func.isRequired,
};

export default IconBox;

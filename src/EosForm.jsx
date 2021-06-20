import React from "react";
import { oneOfType, string, element, any, func } from "prop-types";
// eslint-disable-next-line import/no-unresolved
import { copyText } from "clipboard";

const EosForm = (props) => {
  const { plugin, refContainer, onSearch, searchGif, handleKeyUp, file } =
    props;
  return (
    <div className="iconDialog">
      <h1 className="h1">
        <span>EOS</span>
      </h1>
      <hr />
      <p>Search for icons from the EOS collection.</p>
      {typeof plugin !== "string" && plugin}
      <label htmlFor="searchInput">
        <div className="label">
          <span>Search icons</span>
        </div>
        <input
          ref={refContainer}
          type="text"
          id="searchInput"
          placeholder="Search..."
          onKeyUp={handleKeyUp}
        />
      </label>
      {searchGif}
      <footer>
        <button type="button" className="search" onClick={onSearch}>
          Search
        </button>
        <button
          type="button"
          className="okBtn"
          onClick={() => {
            copyText(file);
          }}
          disabled={!file}
        >
          Copy to Clipboard
        </button>
      </footer>
      {typeof plugin === "string" && (
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: plugin.replace("<svg", "<svg width='100' height='100'"),
          }}
        />
      )}
    </div>
  );
};

EosForm.propTypes = {
  plugin: oneOfType([string, element]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  refContainer: any.isRequired,
  handleKeyUp: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  file: any.isRequired,
  onSearch: func.isRequired,
  searchGif: element.isRequired,
};
export default EosForm;

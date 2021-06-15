const React = require("react");
const PropTypes = require("prop-types");
// eslint-disable-next-line import/no-unresolved
const clipboard = require("clipboard");

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
            clipboard.copyText(file);
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
  plugin: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  refContainer: PropTypes.any.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.any.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchGif: PropTypes.element.isRequired,
};
module.exports = EosForm;

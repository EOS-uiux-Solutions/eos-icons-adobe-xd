const React = require("react");
const PropTypes = require("prop-types");
// eslint-disable-next-line import/no-unresolved
const clipboard = require("clipboard");

const ColorPicker = (props) => {
  const { plugin, refContainer, onSearch, searchGif, handleKeyUp, file } =
    props;
  return (
    <div className="iconDialog">
      <h1 className="h1">
        <span>EOS</span>
      </h1>
      <hr />
      <p>Search for icons from the EOS collection.</p>
      {plugin}
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
        >
          Copy to Clipboard
        </button>
      </footer>
    </div>
  );
};

ColorPicker.propTypes = {
  plugin: PropTypes.element.isRequired,
  refContainer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]).isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.any.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchGif: PropTypes.element.isRequired,
};
module.exports = ColorPicker;

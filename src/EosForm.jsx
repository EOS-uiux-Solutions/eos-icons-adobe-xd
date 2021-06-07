const React = require("react");
const styles = require("./dialog.css");
const clipboard = require("clipboard");

const ColorPicker = (props) => {
  return (
    <div className="iconDialog">
      <h1 className="h1">
        <span>EOS</span>
      </h1>
      <hr />
      <p>Search for icons from the EOS collection.</p>
      {props.plugin}
      <label>
        <div className="label">
          <span>Search icons</span>
        </div>
        <input
          ref={props.refContainer}
          type="text"
          id="searchInput"
          placeholder="Search..."
          onKeyUp={props.handleKeyUp}
        />
      </label>
      {props.searchGif}
      <footer>
        <button className="search" onClick={props.onSearch}>
          Search
        </button>
        <button
          className="okBtn"
          onClick={() => {
            clipboard.copyText(props.file);
          }}
        >
          Copy to Clipboard
        </button>
      </footer>
    </div>
  );
};

module.exports = ColorPicker;

import React, { useRef } from "react";
import clipboard from "clipboard";
import "./dialog.css";
const EosForm = (props) => {
  let file;
  const refContainer = useRef(null);
  const onSearch = () => {
    const svgName = refContainer.current.value;
    const request = new XMLHttpRequest();
    const url = `https://cdn.jsdelivr.net/npm/eos-icons@latest/svg/${svgName}.svg`;
    request.open("GET", url);
    request.onload = () => {
      console.log("response sent");
      file = request.response;
    };
    request.send();
  };
  return (
    <form className="iconDialog">
      <h1 className="h1">
        <span>EOS</span>
      </h1>
      <hr />
      <p>Search for icons from the EOS collection.</p>
      <label>
        <div className="label">
          <span>Search icons</span>
        </div>
        <input
          ref={refContainer}
          type="text"
          id="searchInput"
          placeholder="Search..."
        />
      </label>
      <footer>
        <button className="search" onClick={onSearch}>
          Search
        </button>
        <button
          className="cancelBtn"
          onClick={() => {
            props.dialog.close();
          }}
        >
          Cancel
        </button>
        <button
          className="okBtn"
          onClick={() => {
            clipboard.copyText(file);
            props.dialog.close();
          }}
        >
          Copy to Clipboard
        </button>
      </footer>
    </form>
  );
};

export default EosForm;

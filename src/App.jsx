import React, { useRef, useState } from "react";
import Spinner from "./images/spinner.svg";
import EosForm from "./EosForm";

const App = () => {
  const refContainer = useRef();
  const [plugin, updatePlugin] = useState(
    <p>Let&apos;s start by searching abstract.</p>
  );
  const [file, updateFile] = useState(null);
  const [searchGif, updateSearchGif] = useState(<div />);

  const onSearch = () => {
    const svgName = refContainer.current.value;
    const request = new XMLHttpRequest();
    const url = `https://cdn.jsdelivr.net/npm/eos-icons@latest/svg/${svgName}.svg`;
    request.open("GET", url);
    updateSearchGif(
      <img src={Spinner} width="40px" height="40px" alt="Loading" />
    );
    request.onload = () => {
      if (!request.response.includes("Couldn't find")) {
        updateSearchGif(<div />);
        updateFile(request.response);
        updatePlugin(request.response);
      } else {
        updateSearchGif(<div />);
        updatePlugin(<p>Svg not found. Try searching for abstract.</p>);
      }
    };
    request.send();
  };
  const handleKeyUp = (event) => {
    updatePlugin(<p>We would be searching for {refContainer.current.value}</p>);
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <panel>
      <EosForm
        refContainer={refContainer}
        plugin={plugin}
        handleKeyUp={handleKeyUp}
        file={file}
        onSearch={onSearch}
        searchGif={searchGif}
      />
    </panel>
  );
};

export default App;

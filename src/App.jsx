import React, { useRef, useState } from "react";
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".5"
        />
        <path d="M20,12h2A10,10,0,0,0,12,2V4A8,8,0,0,1,20,12Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
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

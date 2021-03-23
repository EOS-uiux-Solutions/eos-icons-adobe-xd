const React = require("react");
const Spinner = require("./images/Spinner.gif");
const EosForm = require("./EosForm");

const App = () => {
  const refContainer = React.useRef();
  const [plugin, updatePlugin] = React.useState(
    <p>Let's start by searching abstract.</p>
  );
  const [file, updateFile] = React.useState();
  const [searchGif, updateSearchGif] = React.useState(<div></div>);

  const onSearch = () => {
    const svgName = refContainer.current.value;
    const request = new XMLHttpRequest();
    const url = `https://cdn.jsdelivr.net/npm/eos-icons@latest/svg/${svgName}.svg`;
    request.open("GET", url);
    updateSearchGif(<img src={Spinner} width="40px" height="40px" />);
    request.onload = () => {
      if (!request.response.includes("Couldn't find")) {
        updateSearchGif(<div></div>);
        updateFile(request.response);
        updatePlugin(<p>Svg found!! Click copy and use it.</p>);
      } else {
        updateSearchGif(<div></div>);
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
        handleKeyUp={handleKeyUp.bind(this)}
        file={file}
        onSearch={onSearch.bind(this)}
        searchGif={searchGif}
      />
    </panel>
  );
};

module.exports = App;

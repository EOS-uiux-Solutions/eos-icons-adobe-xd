import React, { useRef, useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import * as EOSIcons from "eos-icons-react";
// eslint-disable-next-line import/no-unresolved
import { copyText } from "clipboard";
import FormHolder from "./FormHolder";
import EOSIconsList from "./converted-icons.json";
import OptionsList from "./optionList.json";
import IconBox from "./IconBox";

const App = () => {
  const searchCategory = useRef();
  const searchTheme = useRef();
  const inputField = useRef();
  const [helperText, setHelperText] = useState(
    <p>Let&apos;s start by searching abstract.</p>
  );
  const [alert, updateAlert] = useState(null);
  const [iconsContainer, updateIcons] = useState(null);
  const copyToClipboard = (svg) => {
    copyText(ReactDOMServer.renderToStaticMarkup(svg));
    updateAlert(
      <div className="alert">
        <span>Svg has been copied!!</span>
      </div>
    );
    setTimeout(() => {
      updateAlert(null);
    }, 1000);
  };
  const searchIconsByName = (name, theme, option) => {
    const iconDivs = [];
    EOSIconsList[option].forEach((icon) => {
      const isFilledAvailable = "hasOutlined" in icon && icon.hasOutlined;
      const isFilledSelected = theme === "Filled";
      if (
        icon.name.indexOf(name) !== -1 &&
        (!isFilledSelected || (isFilledSelected && isFilledAvailable))
      ) {
        const nameIcon = `Eos${icon.name}${
          isFilledSelected ? "Filled" : "Outlined"
        }`;
        const EOSReactIcon = EOSIcons[nameIcon];
        if (EOSReactIcon !== undefined) {
          iconDivs.push(
            <div
              className="image-container"
              key={nameIcon}
              onClick={() => {
                copyToClipboard(EOSReactIcon({ size: "xxxl" }));
              }}
            >
              {EOSReactIcon({ size: "xl" })}
            </div>
          );
        }
      }
    });
    if (iconDivs.length === 0) {
      return null;
    }
    return <IconBox option={option} iconDivs={iconDivs} key={option} />;
  };
  useEffect(() => {
    const createIcons = (option) => {
      const iconDivs = [];
      const limit =
        EOSIconsList[option].length < 10 ? EOSIconsList[option].length : 10;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < limit; i++) {
        const icon = EOSIconsList[option][i];
        const name = EOSIcons[`Eos${icon.name}Filled`]
          ? `Eos${icon.name}Filled`
          : `Eos${icon.name}Outlined`;
        const EOSReactIcon = EOSIcons[name];
        if (EOSReactIcon !== undefined) {
          iconDivs.push(
            <div
              className="image-container"
              key={name}
              onClick={() => {
                copyToClipboard(EOSReactIcon({ size: "xxxl" }));
              }}
            >
              {EOSReactIcon({ size: "xl" })}
            </div>
          );
        }
      }

      return <IconBox option={option} iconDivs={iconDivs} key={option} />;
    };
    updateIcons(OptionsList.map((option) => createIcons(option)));
  }, []);

  const onSearch = () => {
    const category = searchCategory.current.value;
    const theme = searchTheme.current.value;
    const name = inputField.current.value;
    let iconList;
    if (category === "all") {
      iconList = OptionsList.map((option) =>
        searchIconsByName(name, theme, option)
      );
    } else {
      iconList = searchIconsByName(name, theme, category);
    }
    updateIcons(iconList);
  };

  const handleKeyUp = (event) => {
    setHelperText(<p>We would be searching for {inputField.current.value}</p>);
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <React.Fragment>
      {alert}
      <panel>
        <FormHolder
          helperText={helperText}
          inputField={inputField}
          handleKeyUp={handleKeyUp}
          onSearch={onSearch}
          searchTheme={searchTheme}
          searchCategory={searchCategory}
          iconOptions={iconsContainer}
        />
      </panel>
    </React.Fragment>
  );
};

export default App;

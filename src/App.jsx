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
    "Let's start by searching abstract."
  );
  const [alert, updateAlert] = useState(false);
  const [iconsContainer, updateIcons] = useState(null);
  const copyToClipboard = (svg) => {
    copyText(ReactDOMServer.renderToStaticMarkup(svg));
    updateAlert(true);
    setTimeout(() => {
      updateAlert(false);
    }, 1000);
  };
  const searchIconsByName = (name, theme, option) => {
    const icons = [];
    EOSIconsList[option].forEach((icon) => {
      const isFilledAvailable = "hasOutlined" in icon && icon.hasOutlined;
      const isFilledSelected = theme === "Filled";
      if (
        icon.name.indexOf(name) !== -1 &&
        (!isFilledSelected || (isFilledSelected && isFilledAvailable))
      ) {
        const nameIcon = `Eos${icon.name}${theme}`;
        const EOSReactIcon = EOSIcons[nameIcon];
        if (EOSReactIcon !== undefined) {
          icons.push({ EOSReactIcon, name: nameIcon });
        }
      }
    });
    if (icons.length === 0) {
      return null;
    }
    return (
      <IconBox
        option={option}
        key={option}
        icons={icons}
        copyToClipboard={copyToClipboard}
      />
    );
  };
  useEffect(() => {
    const createIcons = (option) => {
      const icons = [];
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
          icons.push({ EOSReactIcon, name });
        }
      }

      return (
        <IconBox
          option={option}
          icons={icons}
          key={option}
          copyToClipboard={copyToClipboard}
        />
      );
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
    setHelperText(`We would be searching for ${inputField.current.value}`);
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <React.Fragment>
      {alert ? (
        <div className="alert">
          <span>Svg has been copied!!</span>
        </div>
      ) : null}
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

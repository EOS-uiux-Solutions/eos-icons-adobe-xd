import React, { useRef, useState, useEffect, useCallback } from "react";
import ReactDOMServer from "react-dom/server";
import * as EOSIcons from "eos-icons-react";
// eslint-disable-next-line import/no-unresolved
import { copyText } from "clipboard";
import FormHolder from "./FormHolder";
import EOSIconsList from "./converted-icons.json";
import OptionsList from "./optionList.json";
import IconBox from "./IconBox";
import useDebounce from "../hooks/use-debounce";

const App = () => {
  const searchCategory = useRef();
  const searchTheme = useRef();
  const inputField = useRef();
  const [helperText, setHelperText] = useState(
    "Let's start by searching abstract."
  );
  const [alert, updateAlert] = useState(false);
  const [iconsContainer, updateIcons] = useState(null);
  const copyToClipboard = useCallback((svg) => {
    copyText(ReactDOMServer.renderToStaticMarkup(svg));
    updateAlert(true);
    setTimeout(() => {
      updateAlert(false);
    }, 1000);
  }, []);
  const searchIconsByName = useCallback((name, theme, option) => {
    const icons = [];
    EOSIconsList[option].forEach((icon) => {
      const isFilledAvailable = "hasOutlined" in icon && icon.hasOutlined;
      const isFilledSelected = theme === "Filled";
      let iconName = icon.name;
      while (iconName.includes("_")) {
        iconName = iconName.replace("_", " ");
      }
      if (icon.name.indexOf(name) !== -1) {
        if (theme === "All") {
          const nameFilledIcon = `Eos_${icon.name}_FILLED`.toUpperCase();
          const nameOutlinedIcon = `Eos_${icon.name}_OUTLINED`.toUpperCase();
          const EOSFilledIcon = EOSIcons[nameFilledIcon];
          const EOSOutlinedIcon = EOSIcons[nameOutlinedIcon];
          if (EOSFilledIcon) {
            icons.push({
              EOSReactIcon: EOSFilledIcon,
              name: nameFilledIcon,
              showName: iconName,
            });
          }
          if (EOSOutlinedIcon) {
            icons.push({
              EOSReactIcon: EOSOutlinedIcon,
              name: nameOutlinedIcon,
              showName: iconName,
            });
          }
        } else if (
          !isFilledSelected ||
          (isFilledSelected && isFilledAvailable)
        ) {
          const nameIcon = `Eos_${icon.name}_${theme}`.toUpperCase();
          const EOSReactIcon = EOSIcons[nameIcon];
          if (EOSReactIcon) {
            icons.push({ EOSReactIcon, name: nameIcon, displayName: iconName });
          }
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
  }, []);
  const createIcons = useCallback((option) => {
    const icons = [];
    const limit =
      EOSIconsList[option].length < 10 ? EOSIconsList[option].length : 10;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < limit; i++) {
      const icon = EOSIconsList[option][i];
      const name = EOSIcons[`Eos_${icon.name}_Filled`.toUpperCase()]
        ? `Eos_${icon.name}_Filled`.toUpperCase()
        : `Eos_${icon.name}_Outlined`.toUpperCase();
      const EOSReactIcon = EOSIcons[name];
      if (EOSReactIcon) {
        icons.push({ EOSReactIcon, name, displayName: icon.name });
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
  }, []);

  useEffect(() => {
    updateIcons(OptionsList.map((option) => createIcons(option)));
  }, []);

  const clearValue = useCallback(() => {
    inputField.current.value = "";
    setHelperText("Let's start by searching abstract.");
    updateIcons(OptionsList.map((option) => createIcons(option)));
  }, []);
  const onSearch = useCallback(() => {
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
  }, []);

  const handleOnChange = useCallback(() => {
    useDebounce(onSearch);
  }, []);

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
          handleOnChange={handleOnChange}
          onSearch={onSearch}
          searchTheme={searchTheme}
          searchCategory={searchCategory}
          iconOptions={iconsContainer}
          clearValue={clearValue}
        />
      </panel>
    </React.Fragment>
  );
};

export default App;

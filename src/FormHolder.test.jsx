import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  EOS_10MP_FILLED,
  EOS_TYPING_ANIMATED,
  EOS_10MP_OUTLINED,
} from "eos-icons-react";
import FormHolder from "./FormHolder";
import IconBox from "./IconBox";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the form and surrounding helper texts", () => {
  const eosReactIcons = [
    { EOSReactIcon: EOS_10MP_FILLED, name: "10mp" },
    { EOSReactIcon: EOS_TYPING_ANIMATED, name: "typing" },
    { EOSReactIcon: EOS_10MP_OUTLINED, name: "10mpOutlined" },
  ];
  const eosDivs = (
    <IconBox option="Action" icons={eosReactIcons} copyToClipboard={() => {}} />
  );
  act(() => {
    render(
      <FormHolder
        helperText="Let's start by searching abstract."
        inputField={{ current: null }}
        handleKeyUp={() => {}}
        onSearch={() => {}}
        searchTheme={{ current: null }}
        searchCategory={{ current: null }}
        iconOptions={eosDivs}
        clearValue={() => {}}
      />,
      container
    );
  });
  expect(container.querySelectorAll(".image-container").length).toBe(3);
  expect(container.querySelectorAll(".iconDialog p")[1].textContent).toBe(
    "Let's start by searching abstract."
  );
  expect(container.querySelectorAll(".select-tag")[0].value).toBe("all");
  expect(container.querySelectorAll(".select-tag")[1].value).toBe("Filled");
});

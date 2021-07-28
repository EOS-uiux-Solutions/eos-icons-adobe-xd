import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  Eos10mpFilled,
  EostypingAnimated,
  Eos10mpOutlined,
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
    { EOSReactIcon: Eos10mpFilled, name: "10mp" },
    { EOSReactIcon: EostypingAnimated, name: "typing" },
    { EOSReactIcon: Eos10mpOutlined, name: "10mpOutlined" },
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
      />,
      container
    );
  });
  expect(container.querySelectorAll(".image-container").length).toBe(3);
  expect(container.querySelectorAll(".iconDialog p")[1].textContent).toBe(
    "Let's start by searching abstract."
  );
  expect(container.querySelectorAll(".select-tag")[0].value).toBe("all");
  expect(container.querySelectorAll(".select-tag")[1].value).toBe("Outlined");
});

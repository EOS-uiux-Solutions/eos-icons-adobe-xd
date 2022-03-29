import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  EOS_10MP_FILLED,
  EOS_TYPING_ANIMATED,
  EOS_10MP_OUTLINED,
} from "eos-icons-react";
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

it("renders an iconbox", () => {
  const copyToClipboard = jest.fn();
  const eosReactIcons = [
    { EOSReactIcon: EOS_10MP_FILLED, name: "10mp", displayName: "10mp" },
    {
      EOSReactIcon: EOS_TYPING_ANIMATED,
      name: "typing",
      displayName: "typing",
    },
    {
      EOSReactIcon: EOS_10MP_OUTLINED,
      name: "10mpOutlined",
      displayName: "10mpOutlined",
    },
  ];
  act(() => {
    render(
      <IconBox
        option="Action"
        icons={eosReactIcons}
        copyToClipboard={copyToClipboard}
      />,
      container
    );
  });
  expect(container.querySelectorAll(".image-container").length).toBe(3);
  expect(
    container.querySelector(".category-container span").textContent
  ).toEqual("Action");
  const iconDiv = document.querySelectorAll(".image-container")[0];
  act(() => {
    iconDiv.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(copyToClipboard).toHaveBeenCalledTimes(1);
});

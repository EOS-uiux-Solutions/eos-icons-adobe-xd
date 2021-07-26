import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  Eos10mpFilled,
  EostypingAnimated,
  Eos10mpOutlined,
} from "eos-icons-react";
import { v4 as uuid } from "uuid";
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
  const eosReactIcons = [Eos10mpFilled, EostypingAnimated, Eos10mpOutlined].map(
    (icon) => (
      <div className="image-container" key={uuid()}>
        {icon({ size: "xl" })}
      </div>
    )
  );
  act(() => {
    render(<IconBox option="Action" iconDivs={eosReactIcons} />, container);
  });
  expect(container.querySelectorAll(".image-container").length).toBe(3);
  expect(
    container.querySelector(".category-container span").textContent
  ).toEqual("Action");
});

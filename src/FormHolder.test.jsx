import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  Eos10mpFilled,
  EostypingAnimated,
  Eos10mpOutlined,
} from "eos-icons-react";
import { v4 as uuid } from "uuid";
import FormHolder from "./FormHolder";

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
  const eosReactIcons = [Eos10mpFilled, EostypingAnimated, Eos10mpOutlined].map(
    (icon) => (
      <div className="image-container" key={uuid()}>
        {icon({ size: "xl" })}
      </div>
    )
  );
  act(() => {
    render(
      <FormHolder
        helperText={<p>Let&apos;s start by searching abstract.</p>}
        inputField={() => {}}
        handleKeyUp={() => {}}
        onSearch={() => {}}
        searchTheme={() => {}}
        searchCategory={() => {}}
        iconOptions={eosReactIcons}
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

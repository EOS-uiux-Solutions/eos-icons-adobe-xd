import reactShim from "./react-shim";
import React from "react";
import { render } from "react-dom";
import App from "./EosForm.jsx";

const main = () => {
  let dialog;
  function getDialog() {
    if (dialog == null) {
      dialog = document.createElement("dialog");
      render(<App dialog={dialog} />, dialog);
    }
    return dialog;
  }
  return document.body.appendChild(getDialog()).showModal();
};

export { main };

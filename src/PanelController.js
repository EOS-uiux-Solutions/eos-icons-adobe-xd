import React from "react";
import { render } from "react-dom";
// eslint-disable-next-line import/no-unresolved
import { selection } from "scenegraph";

class PanelController {
  constructor(App) {
    this.App = App;
    this.instance = null;
    this.rootNode = document.createElement("div");
    this.attachment = null;
    ["show", "hide"].forEach((fn) => {
      this[fn] = this[fn].bind(this);
    });
  }

  show(event) {
    const { App } = this;

    this.attachment = event.node;
    this.attachment.appendChild(this.rootNode);

    if (!this.instance) {
      // eslint-disable-next-line react/no-render-return-value
      this.instance = render(
        // eslint-disable-next-line react/jsx-filename-extension
        <App selection={selection} />,
        this.rootNode
      );
    }
  }

  hide() {
    this.attachment.removeChild(this.rootNode);
  }
}

export default PanelController;

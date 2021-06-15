const React = require("react");
const ReactDOM = require("react-dom");
// eslint-disable-next-line import/no-unresolved
const { selection } = require("scenegraph");

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
      this.instance = ReactDOM.render(
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

module.exports = PanelController;

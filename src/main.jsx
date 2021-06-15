const App = require("./App");
const PanelController = require("./PanelController");

const panel = new PanelController(App);

module.exports = {
  panels: {
    panel,
  },
};

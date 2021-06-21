import App from "./App";
import PanelController from "./PanelController";

const panel = new PanelController(App);

// eslint-disable-next-line import/prefer-default-export
export const panels = {
  panel,
};

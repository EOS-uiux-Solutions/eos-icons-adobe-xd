const fs = require("fs");
const icons = require("./eos-icons.json");

const categoryList = {
  action: [],
  alert: [],
  "artificial intelligence": [],
  av: [],
  communication: [],
  content: [],
  design: [],
  development: [],
  device: [],
  editor: [],
  file: [],
  hardware: [],
  home: [],
  image: [],
  maps: [],
  navigation: [],
  notification: [],
  places: [],
  roles: [],
  search: [],
  services: [],
  social: [],
  toggle: [],
  virtualization: [],
};

icons.forEach((icon) => {
  if (icon.type === "static") {
    categoryList[icon.category].push(icon);
  }
});
const options = Object.keys(categoryList);
fs.writeFileSync("./src/optionList.json", JSON.stringify(options), () => {});

fs.writeFile(
  "./src/converted-icons.json",
  JSON.stringify(categoryList),
  () => {}
);

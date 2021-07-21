const fs = require("fs");
const icons = require("../node_modules/eos-icons/dist/js/eos-icons.json");

const categoryArray = [...new Set(icons.map((icon) => icon.category))];
const categoryList = {};
categoryArray.forEach((category) => {
  categoryList[category] = [];
});

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

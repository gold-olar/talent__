const path = require("path");
const fs = require("fs");

const shapes = ["oval", "round", "triangle", "rectangle", "square"];
const colors = ["red", "blue", "green", "yellow", "skyblue", "grey"];

const data = [];

const pickColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const pickShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const generateData = (dataLength) => {
  for (let i = 0; i < dataLength; i++) {
    data.push({
      id: i,
      color: pickColor(),
      shape: pickShape(),
    });
  }

  fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(data));
};

generateData(20);

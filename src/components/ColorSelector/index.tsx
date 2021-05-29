import * as React from "react";

import "./colorselector.styles.scss";

export interface ColorSelectorProps {
  selected: boolean;
  color: string;
  handleColorSelection: (selected: string, color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  color,
  selected,
  handleColorSelection,
}) => {
  return (
    <div
      onClick={() => handleColorSelection(selected ? "REMOVE" : "ADD", color)}
      className={`color-selector ${
        selected ? "color-selector__selected" : ""
      } `}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorSelector;

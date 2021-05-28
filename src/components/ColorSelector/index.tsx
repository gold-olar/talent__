import * as React from "react";

import "./colorselector.styles.scss";

export interface ColorSelectorProps {
  selected: boolean;
  color: string;
}

const ColorSelector: React.SFC<ColorSelectorProps> = ({ color, selected }) => {
  return (
    <div
      className={`color-selector ${selected && "color-selector__selected"} `}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorSelector;

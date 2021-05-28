import * as React from "react";

import "./shapeselector.styles.scss";

export interface ShapeSelectorProps {
  shape: string;
  selected: boolean;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({ shape, selected }) => {
  return (
    <div
      className={`shape-selector ${selected && "shape-selector__selected"} `}
    >
      {shape}
    </div>
  );
};

export default ShapeSelector;

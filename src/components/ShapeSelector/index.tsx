import * as React from "react";

import "./shapeselector.styles.scss";

export interface ShapeSelectorProps {
  shape: string;
  selected: boolean;
  handleShapeSelection: (action: string, shape: string) => void;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({
  shape,
  selected,
  handleShapeSelection,
}) => {
  return (
    <div
      onClick={() => handleShapeSelection(selected ? "REMOVE" : "ADD", shape)}
      className={`shape-selector ${selected && "shape-selector__selected"} `}
    >
      {shape}
    </div>
  );
};

export default ShapeSelector;

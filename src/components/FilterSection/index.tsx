import * as React from "react";
import { shapes, colors } from "../../util/constants";
import ColorSelector from "../ColorSelector";
import ShapeSelector from "../ShapeSelector";

import "./filtersection.styles.scss";

export interface FilterSectionProps {
  selectedShapes: string[];
  selectedColors: string[];
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedShapes,
  selectedColors,
}) => {
  return (
    <>
      <div className="filter-section">
        <h3>Filters</h3>

        <div className="filter-section__shapes-box">
          <h5> Shapes </h5>
          <div className="filter-section__shapes-box-shapes">
            {shapes.map((shape) => (
              <ShapeSelector
                selected={selectedShapes.includes(shape) ? true : false}
                shape={shape}
                key={shape}
              />
            ))}
          </div>
        </div>

        <div className="filter-section__colors-box">
          <h5> Colors </h5>
          <div className="filter-section__colors-box-colors">
            {colors.map((color) => (
              <ColorSelector
                selected={selectedColors.includes(color) ? true : false}
                color={color}
                key={color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

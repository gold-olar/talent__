import * as React from "react";
import { Data } from "../../context/types";
import SingleData from "../SingleData";

import "./datasection.styles.scss";

export interface DataSectionProps {
  filteredData: Data[];
  dataSectionTitle: string;
}

const DataSection: React.FC<DataSectionProps> = ({
  filteredData,
  dataSectionTitle,
}) => {
  return (
    <div className="data-section">
      <h3>
        {dataSectionTitle}{" "}
        <span className="data-section__count">({filteredData.length})</span>{" "}
      </h3>
      <div className="data-section__list">
        {filteredData.map((data) => (
          <SingleData data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default DataSection;

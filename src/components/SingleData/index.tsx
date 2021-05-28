import * as React from "react";
import { Data } from "../../context/types";
// import const

import "./singledata.style.scss";

export interface SingleDataProps {
  data: Data;
}

const SingleData: React.FC<SingleDataProps> = ({ data }) => {
  const specialstyle =
    data.shape === "triangle"
      ? { borderBottom: `100px solid ${data.color}` }
      : { backgroundColor: data.color };

  return (
    <div className="data-box">
      {data.shape}
      {data.color}
      <div className={`data-box__${data.shape}`} style={specialstyle}></div>
    </div>
  );
};

export default SingleData;

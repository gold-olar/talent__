import * as React from "react";
import { DataContextStateType, Data } from "./types";
import { shapes, colors } from "../util/constants";
import rawData from "../util/data.json";

const dataContextDefaultValues: DataContextStateType = {
  state: {
    data: [],
    filteredData: [],
    selectedColors: colors,
    selectedShapes: shapes,
  },
  loadData: () => {},
};

export const DataContext = React.createContext<DataContextStateType>(
  dataContextDefaultValues
);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { state } = dataContextDefaultValues;
  //   User Reducer hook  here instead !
  const [data, setData] = React.useState<Data[]>(state.data);
  const [filteredData, setFilteredData] = React.useState<Data[]>(
    state.filteredData
  );
  const [selectedColors, setSelectedColors] = React.useState<string[]>(
    state.selectedColors
  );
  const [selectedShapes, setSelectedShapes] = React.useState<string[]>(
    state.selectedShapes
  );

  const loadData = () => {
    if (data.length === 0) {
      setData(rawData as Data[]);
      setFilteredData(rawData as Data[]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        state: { data, selectedShapes, selectedColors, filteredData },
        loadData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

interface DataProviderProps {
  children: JSX.Element;
}

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
    dataSectionTitle: "all items",
  },
  loadData: () => {},
  handleColorSelection: () => {},
  handleShapeSelection: () => {},
  handleDataFilter: () => {},
  handleSectiontitle: () => {},
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
  const [dataSectionTitle, setDataSectionTitle] = React.useState<string>(
    state.dataSectionTitle
  );

  const loadData = () => {
    if (data.length === 0) {
      setData(rawData as Data[]);
      return setFilteredData(rawData as Data[]);
    }
  };

  const handleColorSelection = (action: string, color: string) => {
    if (action === "ADD") {
      return setSelectedColors([...selectedColors, color]);
    }
    const filteredColors = selectedColors.filter(
      (selectedColor) => selectedColor !== color
    );
    return setSelectedColors(
      filteredColors.length === 0 ? colors : filteredColors
    );
  };

  const handleShapeSelection = (action: string, shape: string) => {
    if (action === "ADD") {
      return setSelectedShapes([...selectedShapes, shape]);
    }
    const filteredShapes = selectedShapes.filter(
      (selectedShape) => selectedShape !== shape
    );

    return setSelectedShapes(
      filteredShapes.length === 0 ? shapes : filteredShapes
    );
  };

  const handleDataFilter = () => {
    const filteredByShapes = data.filter((datum) =>
      selectedShapes.includes(datum.shape)
    );
    const filteredByBoth = filteredByShapes.filter((datum) =>
      selectedColors.includes(datum.color)
    );
    setFilteredData(filteredByBoth);
  };

  const handleSectiontitle = () => {
    let titleString = [];

    if (
      selectedShapes.length === shapes.length &&
      selectedColors.length === colors.length
    ) {
      titleString[0] = "all";
    } else if (
      (selectedColors.length === colors.length && selectedShapes.length > 1) ||
      (selectedColors.length > 1 && selectedShapes.length === shapes.length)
    ) {
      titleString[0] = "multiple";
    }
    if (
      selectedColors.length === 1 &&
      selectedShapes.length === shapes.length
    ) {
      titleString[0] = "all";
      titleString[1] = selectedColors[0];
    }
    if (
      selectedColors.length === colors.length &&
      selectedShapes.length === 1
    ) {
      titleString[0] = "all";
      titleString[1] = selectedShapes[0];
    }
    if (selectedShapes.length < shapes.length && selectedColors.length === 1) {
      titleString[0] = "multiple";
      titleString[1] = selectedColors[0];
    }
    if (selectedColors.length < colors.length && selectedShapes.length === 1) {
      titleString[0] = "multiple";
      titleString[1] = selectedShapes[0];
    }
    if (selectedColors.length === 1 && selectedShapes.length === 1) {
      titleString[0] = selectedShapes[0];
      titleString[1] = selectedColors[0];
    }

    if (titleString.length === 0) {
      titleString[0] = "multiple";
    }

    titleString.push("items");

    setDataSectionTitle(titleString.join(" "));
  };

  return (
    <DataContext.Provider
      value={{
        state: {
          data,
          selectedShapes,
          selectedColors,
          filteredData,
          dataSectionTitle,
        },
        loadData,
        handleColorSelection,
        handleShapeSelection,
        handleDataFilter,
        handleSectiontitle,
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

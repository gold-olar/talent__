import * as React from "react";
import DataSection from "../../components/DataSection/index";
import FilterSection from "../../components/FilterSection";

import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const {
    requireAuth,
    state: { user },
  } = React.useContext(AuthContext);

  const {
    state: { selectedShapes, selectedColors, filteredData, dataSectionTitle },
    loadData,
    handleColorSelection,
    handleShapeSelection,
    handleDataFilter,
    handleSectiontitle,
  } = React.useContext(DataContext);

  React.useEffect(() => requireAuth(), [requireAuth, user]);
  React.useEffect(
    () => loadData(),
    // eslint-disable-next-line
    []
  );

  React.useEffect(() => {
    handleDataFilter();
    handleSectiontitle();
    // eslint-disable-next-line
  }, [selectedShapes, selectedColors]);

  return (
    <>
      <FilterSection
        selectedShapes={selectedShapes}
        selectedColors={selectedColors}
        handleColorSelection={handleColorSelection}
        handleShapeSelection={handleShapeSelection}
      />
      <DataSection
        dataSectionTitle={dataSectionTitle}
        filteredData={filteredData}
      />
    </>
  );
};

export default Dashboard;

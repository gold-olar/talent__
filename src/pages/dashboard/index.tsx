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
    state: { selectedShapes, selectedColors, filteredData },
    loadData,
  } = React.useContext(DataContext);

  React.useEffect(() => requireAuth(), [requireAuth, user]);
  React.useEffect(() => loadData(), []);

  return (
    <>
      <FilterSection
        selectedShapes={selectedShapes}
        selectedColors={selectedColors}
      />
      <DataSection filteredData={filteredData} />
    </>
  );
};

export default Dashboard;

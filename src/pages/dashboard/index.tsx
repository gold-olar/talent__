import * as React from "react";
import { AuthContext } from "../../context/AuthContext";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const {
    requireAuth,
    state: { user },
  } = React.useContext(AuthContext);

  React.useEffect(() => requireAuth(), [requireAuth, user]);

  return <>Dashboard Page</>;
};

export default Dashboard;

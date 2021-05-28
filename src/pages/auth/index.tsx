import * as React from "react";
import { AuthContext } from "../../context/AuthContext";

export interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
  const {
    requireAuth,
    state: { user },
  } = React.useContext(AuthContext);

  React.useEffect(() => {
    requireAuth();
  }, [requireAuth, user]);

  return <>Render Auth Form here with hardcoded data</>;
};

export default AuthPage;

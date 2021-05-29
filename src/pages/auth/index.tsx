import * as React from "react";
import AuthForm from "../../components/AuthForm";
import { AuthContext } from "../../context/AuthContext";

import "./auth.styles.scss";

export interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
  const {
    requireAuth,
    state: { user },
  } = React.useContext(AuthContext);

  React.useEffect(() => {
    requireAuth();
  }, [requireAuth, user]);

  return (
    <>
      <div className="auth-page">
        <AuthForm />
      </div>
    </>
  );
};

export default AuthPage;

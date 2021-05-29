import * as React from "react";
import { AuthContextState, AuthUserObject } from "./types";
import { history } from "../util/router";

const usercontextDefaultValues: AuthContextState = {
  state: {
    user: null,
  },
  login: (loginData: AuthUserObject) => {},
  logout: () => {},
  requireAuth: () => {},
};

export const AuthContext = React.createContext<AuthContextState>(
  usercontextDefaultValues
);

export interface AuthProviderProps {
  children: JSX.Element;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<AuthUserObject | null>(null);

  const login = (loginData: AuthUserObject) => {
    // For now, just set user data
    setUser({
      ...loginData,
    });
  };
  const logout = () => {
    setUser(null);
  };

  const requireAuth = () => {
    if (!user) {
      return history.replace("/");
    }
    return history.replace("/dashboard");
  };

  return (
    <AuthContext.Provider
      value={{
        state: {
          user,
        },
        login,
        logout,
        requireAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

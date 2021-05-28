// AuthContext Types

export interface AuthUserObject {
  email: string;
  token: string;
}

export type AuthContextState = {
  state: {
    user: AuthUserObject | null;
  };
  login: () => void;
  logout: () => void;
  requireAuth: () => void;
};

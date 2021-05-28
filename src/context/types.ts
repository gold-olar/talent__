export type Shape = "oval" | "round" | "triangle" | "rectangle" | "square";
export type Color = "red" | "blue" | "green" | "yellow" | "skyblue" | "grey";

export interface AuthUserObject {
  email: string;
  token: string;
}

export interface Data {
  id: number;
  shape: Shape;
  color: Color;
}

export type AuthContextState = {
  state: {
    user: AuthUserObject | null;
  };
  login: () => void;
  logout: () => void;
  requireAuth: () => void;
};

export type DataContextStateType = {
  state: {
    data: Data[] | [];
    filteredData: Data[] | [];
    selectedShapes: string[];
    selectedColors: string[];
  };
  loadData: () => void;
};

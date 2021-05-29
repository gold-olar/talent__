export type Shape = "oval" | "round" | "triangle" | "rectangle" | "square";
export type Color = "red" | "blue" | "green" | "yellow" | "skyblue" | "grey";

export interface AuthUserObject {
  email: string;
  token?: string;
  password: string;
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
  login: (loginData: AuthUserObject) => void;
  logout: () => void;
  requireAuth: () => void;
};

export type DataContextStateType = {
  state: {
    data: Data[] | [];
    filteredData: Data[] | [];
    selectedShapes: string[];
    selectedColors: string[];
    dataSectionTitle: string;
  };
  loadData: () => void;
  handleColorSelection: (action: string, color: string) => void;
  handleShapeSelection: (action: string, color: string) => void;
  handleDataFilter: () => void;
  handleSectiontitle: () => void;
};

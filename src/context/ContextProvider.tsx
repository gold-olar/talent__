import AuthProvider from "./AuthContext";
import DataProvider from "./DataContext";

export interface ContextProviderProps {
  children: JSX.Element;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <DataProvider>{children}</DataProvider>
      </AuthProvider>
    </>
  );
};

export default ContextProvider;

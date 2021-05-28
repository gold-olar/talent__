import AuthProvider from "./AuthContext";

export interface ContextProviderProps {
  children: JSX.Element;
}

const ContextProvider: React.SFC<ContextProviderProps> = ({ children }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default ContextProvider;

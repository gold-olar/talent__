import * as React from "react";
import "./navbar.styles.scss";
import loginIcon from "../../assets/icons/enter.svg";
import logOutIcon from "../../assets/icons/logout.svg";
import { AuthContext } from "../../context/AuthContext";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const {
    state: { user },
    login,
    logout,
  } = React.useContext(AuthContext);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logobox">
          <span> SHAPES</span>
        </div>
        <div
          onClick={() => (user ? logout() : login())}
          className="navbar__navitembox"
        >
          <span> {!user ? "Login" : "Logout"} </span>
          <img
            alt="Authentication sign"
            src={!user ? loginIcon : logOutIcon}
            width="25px"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

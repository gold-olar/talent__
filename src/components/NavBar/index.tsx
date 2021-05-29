import * as React from "react";
import "./navbar.styles.scss";

import logOutIcon from "../../assets/icons/logout.svg";
import { AuthContext } from "../../context/AuthContext";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const {
    state: { user },
    logout,
  } = React.useContext(AuthContext);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logobox">
          <span> SHAPES</span>
        </div>
        {user && (
          <div onClick={() => logout()} className="navbar__navitembox">
            <span>Logout </span>
            <img alt="Authentication sign" src={logOutIcon} width="25px" />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

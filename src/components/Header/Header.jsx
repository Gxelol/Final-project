import NavBar from "../NavBar/NavBar";
import valorantHeaderLogo from "../../images/valorant-logo.webp";

import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <div className="header">
        <div className="header__logo-content">
          <NavLink to="/" className="header__title">
            {props.title}
          </NavLink>
          <img
            className="header__logo-image"
            src={valorantHeaderLogo}
            alt="logo"
          />
        </div>
          <NavBar />
        <div className="header__line"></div>
      </div>
    </>
  );
}

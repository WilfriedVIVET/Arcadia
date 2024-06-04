import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppStore } from "../storeZustand";
import { isEmpty } from "../Utils/Utils";

const Navbar = () => {
  const { roleUser, updateRole } = useAppStore();

  const [isActive, setIsActive] = useState(true);

  const menuBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="title-logo">
          <NavLink to="/">
            <span className="span-logo">ARCADIA</span>
          </NavLink>
        </div>

        <div className={`nav-link ${isActive ? "" : "mobile-menu"}`}>
          <ul className="ulnav">
            <li className="li-navbar li-logo">
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <div className="logo">
                  <img src="logo.png" alt="logo arcadia" />
                </div>
              </NavLink>
            </li>
            <li className="li-navbar">
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                ACCUEIL
              </NavLink>
            </li>
            <li className="li-navbar">
              <NavLink
                to="/services"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="li-navbar">
              <NavLink
                to="/habitats"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                HABITATS
              </NavLink>
            </li>
            <li className="li-navbar">
              <NavLink
                to="/contact"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                CONTACT
              </NavLink>
            </li>
            <li className="li-navbar">
              <NavLink
                to="/connexion"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                onClick={() => updateRole("")}
              >
                {isEmpty(roleUser) ? "CONNEXION" : "DECONNEXION"}
              </NavLink>
            </li>
            <li className="li-navbar">
              <NavLink
                to={`/${roleUser}`}
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                {!isEmpty(roleUser) && roleUser.toUpperCase()}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="div-burger">
          <img
            src="burger.png"
            alt="icone menu-burger"
            className="burger"
            onClick={menuBurger}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

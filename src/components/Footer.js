import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div className="adresse">
          <p>10 chemin des étrelots 35380 Paimpont</p>
        </div>
        <ul>
          <li>
            <NavLink to="/contact">Nous contacter.</NavLink>
          </li>
          <li>
            <NavLink to="/politique">Politique de confidentialité.</NavLink>
          </li>
          <li>
            <NavLink to="/mention">Mention légale.</NavLink>
          </li>
        </ul>
      </div>
      <div className="trait-vertical"></div>
      <div className="container-reseaux">
        <span>Suivez-nous sur nos reseaux:</span>
        <div className="reseaux">
          <img src="facebook.png" alt="facebook" />
          <img src="instagram.png" alt="instagram" />
          <img src="x.png" alt="x" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

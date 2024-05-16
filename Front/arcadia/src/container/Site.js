import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Services from "../pages/Services";
import Habitat from "../pages/Habitat";
import Contact from "../pages/Contact";
import Connexion from "../pages/Connexion";
import Politique from "../pages/Politique";
import Mention from "../pages/Mention";
import Admin from "../pages/Admin";
import Veterinaire from "../pages/Veterinaire";
import Employe from "../pages/Employe";

const Site = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/habitats" element={<Habitat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/veterinaire" element={<Veterinaire />} />
        <Route path="/employe" element={<Employe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Site;

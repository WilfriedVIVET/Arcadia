import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Veto from "../components/Veto";
import InfoAnimaux from "../components/InfoAnimaux";

const Veterinaire = () => {
  return (
    <>
      <div className="body-veterinaire">
        <Navbar />
        <div className="header-veterinaire"></div>
        <div className="container-veterinaire">
          <Veto />
          <InfoAnimaux />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Veterinaire;

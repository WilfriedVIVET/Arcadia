import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Veto from "../components/Veto";
import backgroundImage from "../assets/deco/veterinaire.png";

const Veterinaire = () => {
  return (
    <>
      <div className="body-veterinaire">
        <Navbar />
        <div className="container-services">
          <img className="background-image" src={backgroundImage} alt="Pont" />
        </div>
        <div className="container-veterinaire">
          <Veto />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Veterinaire;

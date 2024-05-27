import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Veto from "../components/Veto";

const Veterinaire = () => {
  return (
    <>
      <div className="body-veterinaire">
        <Navbar />
        <div className="header-veterinaire"></div>
        <div className="body-container">
          <Veto />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Veterinaire;

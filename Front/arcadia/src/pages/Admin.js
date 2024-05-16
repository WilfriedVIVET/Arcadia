import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreationCompte from "../components/CreationCompte";
import ServicesAdmin from "../components/ServicesAdmin";
import HorairesAdmin from "../components/HorairesAdmin";
import HabitatsAdmin from "../components/HabitatsAdmin";

const Admin = () => {
  return (
    <div className="admin">
      <Navbar />
      <CreationCompte />
      <ServicesAdmin />
      <HorairesAdmin />
      <HabitatsAdmin />
      <Footer />
    </div>
  );
};

export default Admin;

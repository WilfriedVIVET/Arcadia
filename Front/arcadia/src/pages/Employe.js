import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesAdmin from "../components/ServicesAdmin";
import InfoAnimaux from "../components/InfoAnimaux";
import Avis from "../components/Avis";
import { useDispatch } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import store from "../Redux/store/store";
import { getAvis } from "../Redux/actions/avis.action";

const Employe = () => {
  const dispatch = useDispatch;
  useEffect(() => {
    if (isEmpty(store.getState().getAvis)) store.dispatch(getAvis());
  }, [dispatch]);
  return (
    <>
      <div className="body-employe">
        <Navbar />
        <div className="header-veterinaire"></div>
        <div className="header-employe"></div>
        <div className="container-employe">
          <ServicesAdmin />
          <InfoAnimaux />
          <Avis />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Employe;

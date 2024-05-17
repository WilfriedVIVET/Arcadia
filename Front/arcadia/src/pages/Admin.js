import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreationCompte from "../components/CreationCompte";
import ServicesAdmin from "../components/ServicesAdmin";
import HorairesAdmin from "../components/HorairesAdmin";
import HabitatsAdmin from "../components/HabitatsAdmin";
import store from "../Redux/store/store";
import { getServices } from "../Redux/actions/services.action";
import { getHabitats } from "../Redux/actions/habitats.action";
import { getAnimaux } from "../Redux/actions/animaux.action";
import { getHoraire } from "../Redux/actions/horaire.action";
import { isEmpty } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.getServices);
  const habitats = useSelector((state) => state.getHabitats);
  const animaux = useSelector((state) => state.getAnimaux);
  const horaires = useSelector((state) => state.getHoraire);

  //Récupération des infos du zoo.
  useEffect(() => {
    if (isEmpty(store.getState().getServices)) store.dispatch(getServices());
    if (isEmpty(store.getState().getHabitats)) store.dispatch(getHabitats());
    if (isEmpty(store.getState().getAnimaux)) store.dispatch(getAnimaux());
    if (isEmpty(store.getState().getHoraire)) store.dispatch(getHoraire());
  }, [dispatch, services, habitats, animaux, horaires]);

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

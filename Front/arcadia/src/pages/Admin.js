import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreationCompte from "../components/CreationCompte";
import ServicesAdmin from "../components/ServicesAdmin";
import HorairesAdmin from "../components/HorairesAdmin";
import HabitatsAdmin from "../components/HabitatsAdmin";
import RapportAdmin from "../components/RapportAdmin";
import Animaux from "../components/Animaux";
import Race from "../components/Race";
import store from "../Redux/store/store";
import { getServices } from "../Redux/actions/services.action";
import { getHabitats } from "../Redux/actions/habitats.action";
import { getAnimaux } from "../Redux/actions/animaux.action";
import { getRaces } from "../Redux/actions/races.action";
import { getHoraire } from "../Redux/actions/horaire.action";
import { getUtilisateur } from "../Redux/actions/utilisateur.action";
import { isEmpty } from "../Utils/Utils";
import { useDispatch } from "react-redux";
import { getInfoAnimal } from "../Redux/actions/infoAnimal.action";
import { getRapport } from "../Redux/actions/rapport.action";

const Admin = () => {
  const dispatch = useDispatch();
  //Récupération des infos du zoo.
  useEffect(() => {
    if (isEmpty(store.getState().getServices)) store.dispatch(getServices());
    if (isEmpty(store.getState().getInfoAnimal))
      store.dispatch(getInfoAnimal());
    if (isEmpty(store.getState().getHabitats)) store.dispatch(getHabitats());
    if (isEmpty(store.getState().getAnimaux)) store.dispatch(getAnimaux());
    if (isEmpty(store.getState().getRapport)) store.dispatch(getRapport());
    if (isEmpty(store.getState().getHoraire)) store.dispatch(getHoraire());
    if (isEmpty(store.getState().getUtilisateur))
      store.dispatch(getUtilisateur());
    if (isEmpty(store.getState().getRaces)) store.dispatch(getRaces());
  }, [dispatch]);
  return (
    <div className="container-admin">
      <div className="admin">
        <Navbar />
        <CreationCompte />
        <ServicesAdmin />
        <HorairesAdmin />
        <RapportAdmin />
        <Race />
        <Animaux />
        <HabitatsAdmin />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;

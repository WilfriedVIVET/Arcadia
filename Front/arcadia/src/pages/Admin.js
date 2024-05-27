import React, { useEffect, useState } from "react";
import Select from "react-select";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreationCompte from "../components/CreationCompte";
import ServicesAdmin from "../components/ServicesAdmin";
import HorairesAdmin from "../components/HorairesAdmin";
import HabitatsAdmin from "../components/HabitatsAdmin";
import RapportAdmin from "../components/RapportAdmin";
import Animaux from "../components/Animaux";
import Mongo from "../components/Mongo";
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
  const [selectedOption, setSelectedOption] = useState("veterinaire");

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

  // Style personnalisé pour les options et le contrôle
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#3d6734",
      color: "#FCFCFC",
      fontSize: "1.2em",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "1.2em",
      backgroundColor: state.isSelected ? "#6c8f60" : "#3d6734",
      color: "#FCFCFC",
      "&:hover": {
        backgroundColor: "#6c8f60",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#FCFCFC",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#3d6734",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#your-color-hex-code",
      fontSize: "1.3em",
    }),
  };

  useEffect(() => {
    console.log("selected = ", selectedOption);
  }, [selectedOption]);

  // Composant à afficher en fonction de selectedOption
  const getComponent = () => {
    switch (selectedOption) {
      case "veterinaire":
        return <RapportAdmin />;
      case "services":
        return <ServicesAdmin />;
      case "habitats":
        return <HabitatsAdmin />;
      case "animaux":
        return [<Animaux />, <Race />, <Mongo />];
      case "comptes":
        return <CreationCompte />;
      case "horaires":
        return <HorairesAdmin />;
      default:
        return null;
    }
  };

  const optionsSousMenu = [
    { value: "veterinaire", label: "Rapports veterinaire" },
    { value: "services", label: "Services" },
    { value: "habitats", label: "Habitats" },
    { value: "animaux", label: "Animaux" },
    { value: "horaires", label: "Horaires" },
    { value: "comptes", label: "Comptes" },
  ];

  return (
    <div className="container-admin">
      <div className="admin">
        <Navbar />
        <div className="sous-menu">
          <Select
            styles={customStyles}
            options={optionsSousMenu}
            defaultValue={optionsSousMenu[0]}
            onChange={(options) => setSelectedOption(options.value)}
          />
        </div>
        <div className="sous-menu-container">{getComponent()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;

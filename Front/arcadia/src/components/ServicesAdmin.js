import React, { useState } from "react";
import { isEmpty } from "../Utils/Utils";
import { useSelector } from "react-redux";
import {
  updateService,
  deleteService,
  createService,
} from "../Utils/ServicesUtils";

const ServicesAdmin = () => {
  const services = useSelector((state) => state.getServices);

  const [serviceUpdate, setServiceUpdate] = useState({
    index: "",
    nom: "",
    description: "",
  });
  const [index, setIndex] = useState({
    index: "",
  });

  //Fonction qui récupére l'index du service cliqué.
  const handleService = (service) => {
    setServiceUpdate((prevData) => ({ ...prevData, index: service }));
  };

  // Fonction qui modifie la valeur du nom du service.
  const handleNomChange = (e) => {
    setServiceUpdate((prevState) => ({
      ...prevState,
      nom: e.target.value,
    }));
  };

  // Fonction qui modifie la valeur de la description du service.
  const handleDescriptionChange = (e) => {
    setServiceUpdate((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  //Fonction qui modifie un service.
  const handleUpdate = (service) => {
    updateService(serviceUpdate);
  };

  //Fonction qui supprime un service.
  const handleDelete = (service) => {
    setIndex((prevData) => ({
      ...prevData,
      index: service,
    }));

    deleteService(index);
  };

  //Fonction qui ajoute un service.
  const handleCreate = () => {
    createService(serviceUpdate);
  };

  return (
    <div className="container-formulaire">
      <div className="header-formulaire">
        <span>SERVICES</span>
      </div>
      <div className="services-admin">
        {!isEmpty(services) &&
          services.map((service, index) => (
            <div
              className="service-admin"
              key={index}
              onClick={() => handleService(service.service_id)}
            >
              <input
                className="input-nomService"
                defaultValue={service.nom}
                onChange={handleNomChange}
              ></input>
              <textarea
                className="textArea-descriptionService"
                defaultValue={service.description}
                onChange={handleDescriptionChange}
              ></textarea>
              <div className="bloc-petit-bouton">
                <button
                  className="petit-bouton"
                  onClick={() => handleUpdate(service.service_id)}
                >
                  MODIFIER
                </button>
                <button
                  className="petit-bouton"
                  onClick={() => handleDelete(service.service_id)}
                >
                  SUPPRIMER
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="form-service">
        <label htmlFor="nom">NOM:</label>
        <input type="text" name="nom" id="nom" onChange={handleNomChange} />
        <label htmlFor="description">DESCRIPTION:</label>
        <textarea
          name="description"
          id="description"
          onChange={handleDescriptionChange}
        ></textarea>
        <button className="button-formulaire" onClick={handleCreate}>
          AJOUTER UN SERVICE
        </button>
      </div>
    </div>
  );
};

export default ServicesAdmin;

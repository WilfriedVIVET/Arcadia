import React, { useEffect, useState } from "react";
import { isEmpty } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import {
  updateService,
  deleteService,
  createService,
} from "../Utils/ServicesUtils";
import { getServices } from "../Redux/actions/services.action";

const ServicesAdmin = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.getServices);

  useEffect(() => {
    if (isEmpty(services)) {
      dispatch(getServices());
    }
  }, [dispatch, services]);

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
  const handleUpdate = async (service) => {
    await updateService(serviceUpdate);
    dispatch(getServices());
  };

  //Fonction qui supprime un service.
  const handleDelete = async (service) => {
    setIndex((prevData) => ({
      ...prevData,
      index: service,
    }));
    await deleteService(index);
    dispatch(getServices());
  };

  //Fonction qui ajoute un service.
  const handleCreate = async () => {
    await createService(serviceUpdate);
    dispatch(getServices());
  };

  return (
    <>
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
      </div>

      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>CREER UN SERVICE</span>
        </div>
        <form className="formulaire">
          <label htmlFor="nom" className="label-formulaire">
            NOM:
          </label>
          <input
            type="text"
            name="nom"
            className="input-formulaire"
            id="nom"
            onChange={handleNomChange}
          />
          <label htmlFor="description" className="label-formulaire">
            DESCRIPTION:
          </label>
          <textarea
            name="description"
            id="description"
            onChange={handleDescriptionChange}
            className="textArea-formulaire"
          ></textarea>
          <button className="button-formulaire" onClick={handleCreate}>
            AJOUTER UN SERVICE
          </button>
        </form>
      </div>
    </>
  );
};

export default ServicesAdmin;

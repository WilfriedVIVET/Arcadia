import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Vignette from "../components/VignetteServices";
import Habitat from "../components/VignetteHabitat";
import ModalAvis from "../components/ModalAvis";
import store from "../Redux/store/store";
import { isEmpty } from "../Utils/Utils";
import { getServices } from "../Redux/actions/services.action";
import { getHabitats } from "../Redux/actions/habitats.action";
import { getAnimaux } from "../Redux/actions/animaux.action";
import { getHoraire } from "../Redux/actions/horaire.action";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

const Accueil = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.getServices);
  const habitats = useSelector((state) => state.getHabitats);
  const animaux = useSelector((state) => state.getAnimaux);
  const horaires = useSelector((state) => state.getHoraire);

  const [showModalAvis, setShowModalAvis] = useState(false);

  //Récupération des infos du zoo.
  useEffect(() => {
    if (isEmpty(store.getState().getServices)) store.dispatch(getServices());
    if (isEmpty(store.getState().getHabitats)) store.dispatch(getHabitats());
    if (isEmpty(store.getState().getAnimaux)) store.dispatch(getAnimaux());
    if (isEmpty(store.getState().getHoraire)) store.dispatch(getHoraire());
  }, [dispatch, services, habitats, animaux, horaires]);

  const handleShowModale = () => {
    setShowModalAvis(!showModalAvis);
  };

  return (
    <>
      <div className="accueil">
        <Navbar />
        <div className="header">
          <span>Parc ouvert toute l'année.</span>
        </div>

        <div className="container-bloc herbe">
          <div className="header-contenu">
            <div className="trait"></div>
            <h2>ARCADIA</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              reiciendis dolores officiis necessitatibus quia sequi facere
              deserunt unde velit tempora quod laborum a enim itaque veritatis,
              laboriosam tenetur maiores ut.
            </p>
          </div>
        </div>
        <div className="container-bloc feuille">
          <div className="header-contenu">
            <div className="trait"></div>
            <h2>NOS SERVICES</h2>
          </div>
          <div className="services">
            {!isEmpty(services) &&
              services.map((service, index) => (
                <Vignette service={service} key={index} />
              ))}
          </div>
        </div>
        <div className="container-bloc herbe">
          <Link to={"/habitats"}>
            <div className="header-contenu">
              <div className="trait"></div>
              <h2>NOS HABITATS</h2>
            </div>
            <div className="habitats">
              {!isEmpty(habitats) &&
                habitats.map((habitat, index) => (
                  <Habitat habitat={habitat} key={index} />
                ))}
            </div>
          </Link>
        </div>
        <div className="container-bloc feuille">
          <div className="header-contenu">
            <div className="trait"></div>
            <h2>NOS ANIMAUX</h2>
          </div>
          <div className="animaux">
            <ul>
              {!isEmpty(animaux) &&
                animaux.map((animal, index) => (
                  <li key={index}>&#8722;{animal.label}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="container-bloc herbe">
          <div className="header-contenu">
            <div className="trait"></div>
            <h2>VOS AVIS</h2>
          </div>
          <div className="carrousel"></div>
          <button className="button-formulaire" onClick={handleShowModale}>
            Laissez un avis
          </button>
          {showModalAvis && (
            <Draggable>
              <ModalAvis handleShowModale={handleShowModale} />
            </Draggable>
          )}
        </div>
        <div className="container-bloc herbe">
          <div className="trait"></div>
          <h2>NOS HORAIRES</h2>
          <div className="horaire">
            {!isEmpty(horaires) &&
              horaires.map((horaire, index) => (
                <div className="bloc-horaire" key={index}>
                  <span>{horaire.jour} :</span>
                  <span>
                    {horaire.debut} / {horaire.fin}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Accueil;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Vignette from "../components/VignetteServices";
import VignetteHabitat from "../components/VignetteHabitat";
import ModalAvis from "../components/ModalAvis";
import store from "../Redux/store/store";
import { isEmpty } from "../Utils/Utils";
import { getServices } from "../Redux/actions/services.action";
import { getHabitats } from "../Redux/actions/habitats.action";
import { getAnimaux } from "../Redux/actions/animaux.action";
import { getHoraire } from "../Redux/actions/horaire.action";
import { getRaces } from "../Redux/actions/races.action";
import { getAvisIsValid } from "../Redux/actions/avisIsValid.action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Accueil = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.getServices);
  const habitats = useSelector((state) => state.getHabitats);
  const animaux = useSelector((state) => state.getAnimaux);
  const horaires = useSelector((state) => state.getHoraire);
  const avis = useSelector((state) => state.getAvisIsValid);

  const [showModalAvis, setShowModalAvis] = useState(false);

  //Récupération des infos du zoo.
  useEffect(() => {
    if (isEmpty(store.getState().getServices)) store.dispatch(getServices());
    if (isEmpty(store.getState().getHabitats)) store.dispatch(getHabitats());
    if (isEmpty(store.getState().getAnimaux)) store.dispatch(getAnimaux());
    if (isEmpty(store.getState().getHoraire)) store.dispatch(getHoraire());
    if (isEmpty(store.getState().getRaces)) store.dispatch(getRaces());
    if (isEmpty(store.getState().getAvisIsValid))
      store.dispatch(getAvisIsValid());
  }, [dispatch]);

  const handleShowModale = () => {
    setShowModalAvis(!showModalAvis);
  };

  // Configuration du slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <>
      <div className="accueil">
        <Navbar />
        <div className="header-accueil">
          <span>Parc ouvert toute l'année.</span>
        </div>

        <section className="container-rubrique herbe">
          <div className="header-contenu">
            <div className="trait"></div>
            <span className="title">ARCADIA</span>
          </div>
          <div className="description">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              reiciendis dolores officiis necessitatibus quia sequi facere
              deserunt unde velit tempora quod laborum a enim itaque veritatis,
              laboriosam tenetur maiores ut.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </section>
        <section className="container-bloc feuille">
          <div className="header-contenu">
            <div className="trait"></div>
            <span className="title">NOS SERVICES</span>
          </div>
          <div className="services">
            {!isEmpty(services) &&
              services.map((service, index) => (
                <Vignette service={service} key={index} />
              ))}
          </div>
        </section>
        <section className="container-habitat  ">
          <Link to={"/habitats"}>
            <div className="header-contenu">
              <div className="trait"></div>
              <span className="title">NOS HABITATS</span>
            </div>
            <div className="flex-habitat">
              {!isEmpty(habitats) &&
                habitats.map((habitat, index) => (
                  <VignetteHabitat habitat={habitat} key={index} />
                ))}
            </div>
          </Link>
        </section>
        <section className="container-habitat feuille">
          <div className="header-contenu">
            <div className="trait"></div>
            <span className="title">NOS ANIMAUX</span>
          </div>
          <div className="animaux">
            <ul>
              {!isEmpty(animaux) &&
                animaux.map((animal, index) => (
                  <li key={index}>&#8722;{animal.prenom}</li>
                ))}
            </ul>
          </div>
        </section>
        <section className="container-habitat herbe">
          <div className="header-contenu">
            <div className="trait"></div>
            <span className="title">VOS AVIS</span>
          </div>
          <div className="formulaire">
            <div className="carrousel">
              <Slider {...settings}>
                {!isEmpty(avis) &&
                  avis.map((avisUser, index) => (
                    <div className="bloc-avis" key={index}>
                      <li className="li-avis">
                        {avisUser.pseudo}: <br />
                        {avisUser.commentaire}
                      </li>
                    </div>
                  ))}
              </Slider>
            </div>
            <button className="button-accueil-avis" onClick={handleShowModale}>
              Laissez un avis
            </button>
            {showModalAvis && <ModalAvis handleShowModale={handleShowModale} />}
          </div>
        </section>
        <section className="container-habitat feuille">
          <div className="header-contenu">
            <div className="trait"></div>
            <span className="title">NOS HORAIRES</span>
          </div>
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
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Accueil;

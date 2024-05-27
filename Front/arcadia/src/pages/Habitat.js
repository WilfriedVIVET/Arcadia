import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VignetteHabitatComplet from "../components/VignetteHabitatComplet";
import { isEmpty } from "../Utils/Utils";
import { useSelector, useDispatch } from "react-redux";
import { getAnimaux } from "../Redux/actions/animaux.action";
import { getHabitatComplet } from "../Redux/actions/habitatComplet.action";
import store from "../Redux/store/store";

const Habitat = () => {
  const dispatch = useDispatch();
  const habitatComplet = useSelector((state) => state.getHabitatComplet);
  const animalInfo = useSelector((state) => state.getAnimal);

  useEffect(() => {
    if (isEmpty(store.getState().getHabitatComplet))
      store.dispatch(getHabitatComplet());
    if (isEmpty(store.getState().getAnimaux)) store.dispatch(getAnimaux());
  }, [dispatch, habitatComplet, animalInfo]);

  return (
    <>
      <div className="body-habitat">
        <Navbar />
        <div className="header-habitat">
          <span>NOS HABITATS</span>
        </div>

        <div className="container-habitats">
          {Array.isArray(habitatComplet) && !isEmpty(habitatComplet) ? (
            habitatComplet.map((habitat, index) => (
              <VignetteHabitatComplet habitat={habitat} key={index} />
            ))
          ) : (
            <p>Aucun habitat disponible</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Habitat;

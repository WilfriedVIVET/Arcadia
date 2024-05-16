import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VignetteHabitat from "../components/VignetteHabitatComplet";
import { isEmpty } from "../Utils/Utils";
import { useSelector, useDispatch } from "react-redux";
import { getHabitatComplet } from "../Redux/actions/habitatComplet.action";
import { getInfoAnimal } from "../Redux/actions/infoAnimal.action";
import store from "../Redux/store/store";

const Habitat = () => {
  const dispatch = useDispatch();
  const habitatComplet = useSelector((state) => state.getHabitatComplet);
  const infoAnimal = useSelector((state) => state.getInfoAnimal);

  useEffect(() => {
    if (isEmpty(store.getState().getHabitatComplet))
      store.dispatch(getHabitatComplet());
    if (isEmpty(store.getState().getInfoAnimal))
      store.dispatch(getInfoAnimal());
  }, [dispatch, habitatComplet, infoAnimal]);

  return (
    <>
      <div className="body-habitat">
        <Navbar />
        <div className="header-habitat">
          <span>NOS HABITATS</span>
        </div>
        <div className="container-habitats">
          {!isEmpty(habitatComplet) &&
            habitatComplet.map((habitat, index) => (
              <VignetteHabitat habitat={habitat} key={index} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Habitat;

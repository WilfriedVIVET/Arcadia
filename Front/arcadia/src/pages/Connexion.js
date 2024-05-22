import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getRole } from "../Utils/CompteUtils";
import { useAppStore } from "../storeZustand";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const { roleUser, updateRole } = useAppStore();

  const navigate = useNavigate();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleUser = (e) => {
    setShowAlert(false);
    const { name, value } = e.target;

    setAccount((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Vérification du role et redirection de la page.
  const redirectPage = (role) => {
    switch (role) {
      case "admin":
        console.log("page admin");
        navigate("/admin");
        break;
      case "veterinaire":
        console.log("page veterinaire");
        navigate("/veterinaire");
        break;
      case "employe":
        console.log("page employe");
        navigate("/employe");
        break;
      default:
        console.log("page vide");
    }
  };

  useEffect(() => {
    redirectPage(roleUser);
  }, [roleUser]);

  const submitConnexion = (e) => {
    e.preventDefault();
    console.log("role = " + roleUser);
    getRole(account).then((role) => {
      // Vérification des bons identifiants.
      if (!role) {
        setShowAlert(true);
        return;
      }

      updateRole(role);
    });
  };

  return (
    <>
      <div className="body-container">
        <Navbar />
        <div className="container-formulaire">
          <div className="header-formulaire">
            <span>CONNECTEZ-VOUS:</span>
          </div>
          <form onSubmit={submitConnexion} className="formulaire">
            <div className="formulaire-bloc">
              <label htmlFor="email" className="label-formulaire">
                Email:
              </label>
              <input
                type="text"
                name="email"
                className="input-formulaire"
                id="email"
                onChange={handleUser}
                autoComplete="email"
                required
              />
            </div>
            <div className="formulaire-bloc">
              <label htmlFor="password" className="label-formulaire">
                Mot de passe:
              </label>
              <input
                type="password"
                name="password"
                className="input-formulaire"
                id="password"
                onChange={handleUser}
                autoComplete="current-password"
                required
              />
            </div>

            <button className="button-formulaire" type="submit">
              Connexion
            </button>
          </form>
          <span className={showAlert ? "alert show" : "alert "}>
            Identifiants incorrects. Veuillez réessayer.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connexion;

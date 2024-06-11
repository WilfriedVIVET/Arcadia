import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getRole } from "../Utils/CompteUtils";
import { useAppStore } from "../storeZustand";
import { useNavigate } from "react-router-dom";

import Alert from "../components/Alert";

const Connexion = () => {
  const { roleUser, updateRole } = useAppStore();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleUser = (e) => {
    setShowAlert(false);
    const { name, value } = e.target;

    setAccount((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Vérification du rôle et redirection de la page.
  const redirectPage = useCallback(
    (role) => {
      switch (role) {
        case "admin":
          navigate("/admin");
          break;
        case "veterinaire":
          navigate("/veterinaire");
          break;
        case "employe":
          navigate("/employe");
          break;
        default:
          console.log("page vide");
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (roleUser) {
      redirectPage(roleUser);
    }
  }, [roleUser, redirectPage]);

  const submitConnexion = (e) => {
    e.preventDefault();

    getRole(account).then((role) => {
      if (!role) {
        setShowAlert(true);
        return;
      }
      updateRole(role);
    });
  };

  return (
    <div className="body-container">
      <Navbar />
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>CONNECTEZ-VOUS:</span>
        </div>
        <form onSubmit={submitConnexion} className="formulaire">
          <label htmlFor="email" className="label-formulaire">
            Email:
          </label>
          <input
            type="text"
            name="email"
            className="input-formulaire no-capitalize"
            id="email"
            onChange={handleUser}
            autoComplete="email"
            required
          />
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
          <button className="button-formulaire" type="submit">
            Connexion
          </button>
        </form>
        {showAlert && (
          <Alert
            message={
              "Identifiant ou mot de passe incorrect, Veuillez réessayer !"
            }
            color={"error"}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Connexion;

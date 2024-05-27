import React, { useState } from "react";
import { postNewCompte, updateUser, deleteUser } from "../Utils/CompteUtils";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import { getUtilisateur } from "../Redux/actions/utilisateur.action";

const CreationCompte = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUtilisateur);
  const [showbouton, setShowBouton] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    username: "",
    nom: "",
    prenom: "",
  });

  const [account, setAccount] = useState({
    role: "2",
    email: "",
    prenom: "",
    nom: "",
    password: "",
  });

  const handleUserChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setAccount((prevFormulaire) => ({
        ...prevFormulaire,
        role: e.target.id,
      }));
    } else {
      setAccount((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  //Fonction qui remet les champs du formulaire à zéro.
  const resetForm = (e) => {
    const form = e.target;
    form.reset();
    setAccount({
      role_id: "2",
      email: "",
      prenom: "",
      nom: "",
      password: "",
    });
  };

  // Gestion du clic sur une ligne du tableau
  const handleTableClick = (user) => {
    setSelectedUser((prevData) => ({
      ...prevData,
      username: user.username,
      nom: user.nom,
      prenom: user.prenom,
    }));
    setShowBouton(!showbouton);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Modification d'un compte
  const handleModif = async () => {
    await updateUser(selectedUser);
    dispatch(getUtilisateur());
  };

  //Suppression d'un compte.
  const handleDelete = async () => {
    await deleteUser(selectedUser);
    dispatch(getUtilisateur());
  };

  //Envoie du nouveau compte au serveur.
  const submitAccount = (e) => {
    e.preventDefault();
    postNewCompte(account);
    resetForm(e);
  };

  return (
    <>
      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>COMPTE</span>
        </div>
        <div className="formulaire">
          <table className="tableau-admin">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Rôle</th>
              </tr>
            </thead>
            <tbody>
              {!isEmpty(users) &&
                users.map((user, index) => (
                  <tr key={index} onClick={() => handleTableClick(user)}>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.label}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div
            className="modif-utilisateur"
            style={{ display: showbouton ? "flex" : "none" }}
          >
            <input
              type="text"
              className="input-formulaire"
              name="nom"
              defaultValue={selectedUser ? selectedUser.nom : ""}
              onChange={handleInput}
            />
            <input
              type="text"
              className="input-formulaire"
              name="prenom"
              defaultValue={selectedUser ? selectedUser.prenom : ""}
              onChange={handleInput}
            />

            <div className="bloc-petit-bouton">
              <button className="button-formulaire" onClick={handleModif}>
                Modifier
              </button>
              <button className="button-formulaire" onClick={handleDelete}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-formulaire">
        <div className="header-formulaire">
          <span>CREER UN COMPTE</span>
        </div>
        <form onSubmit={submitAccount} className="formulaire">
          <div className="formulaire-radio">
            <label htmlFor="2" className="label-radio-formulaire">
              Employé
            </label>
            <input
              type="radio"
              id="2"
              name="compte"
              onClick={handleUserChange}
              defaultChecked
              className="input-radio"
            />
            <label htmlFor="3" className="label-radio-formulaire">
              Vétérinaire
            </label>
            <input
              type="radio"
              id="3"
              name="compte"
              onClick={handleUserChange}
              className="input-radio"
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="email" className="label-formulaire">
              Email:
            </label>
            <input
              type="text"
              name="email"
              className="input-formulaire"
              id="email"
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="prenom" className="label-formulaire">
              Prénom:
            </label>
            <input
              type="text"
              name="prenom"
              className="input-formulaire"
              id="prenom"
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="password" className="label-formulaire">
              Nom:
            </label>
            <input
              type="text"
              name="nom"
              className="input-formulaire"
              id="nom"
              onChange={handleUserChange}
              required
            />
          </div>
          <div className="formulaire-bloc">
            <label htmlFor="password" className="label-formulaire">
              Mot de passe:
            </label>
            <input
              type="text"
              name="password"
              className="input-formulaire"
              id="password"
              onChange={handleUserChange}
              required
            />
          </div>
          <button className="button-formulaire" type="submit">
            CREER
          </button>
        </form>
      </div>
    </>
  );
};

export default CreationCompte;

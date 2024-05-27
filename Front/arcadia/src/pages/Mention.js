import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Mention = () => {
  return (
    <>
      <div className="body-container">
        <Navbar />
        <div className="container-formulaire">
          <div className="header-formulaire">
            <span>Mentions légales :</span>
          </div>
          <div className="formulaire">
            <span>
              <strong>Propriétaire </strong> du site web : José ARCADIA –
              Libérale numéro Adéli :123456787
            </span>
            <span>
              <strong>Numéro de SIRET de l'entreprise</strong> : 12345628944612
            </span>
            <br />
            <span>URSAFF 18, rue de la République 29000 Quimper </span>
            <br />
            <br />
            <p>
              <strong>Créateur</strong> : José ARCADIA <br />
              <br />
              <strong>Responsable de publication</strong> : José ARCADIA <br />
              <br />
              <strong>Adresse de courrier électronique </strong> :
              josearcadia@hotmail.fr <br />
              <br />
              <strong>Hébergeur</strong> : OVH– 5 rue degaulle – 35380 Paimpont
              – France <br /> <br />
              <strong>Résponsabilité :</strong>
              <br />
              Le propriétaire du site web se réserve le droit de modifier le
              contenu à tout moment, sans préavis. Toutes les marques, produis,
              logos et images cités dans ce site appartiennent à leur marque
              respective.
              <br />
              <br />
              <strong>Traitement des données personnelles:</strong>
              <br />
              Les informations provenant de l’enregistrement de l’utilisateur
              sur le site, lors d’un paiement, d’une prise de contact ou d’un
              commentaire seront gardées confidentiellement et ne seront en
              aucun cas divulguées à un quelconque tiers.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mention;

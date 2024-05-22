import React from "react";

const VignetteServices = ({ service }) => {
  return (
    <div className="service">
      <div className="title-service">
        <span className="title">{service.nom}</span>
      </div>
      <p>{service.description}</p>
    </div>
  );
};

export default VignetteServices;

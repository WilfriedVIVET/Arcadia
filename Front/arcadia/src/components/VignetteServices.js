import React from "react";

const VignetteServices = ({ service }) => {
  return (
    <div className="service">
      <p>{service.description}</p>
      <div className="title-service">
        <span className="title">{service.nom}</span>
      </div>
    </div>
  );
};

export default VignetteServices;

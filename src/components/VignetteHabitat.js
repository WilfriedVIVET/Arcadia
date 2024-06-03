import React from "react";

const VignetteHabitat = ({ habitat }) => {
  return (
    <div className="habitat">
      <span className="span-habitat">{habitat.nom}</span>
      <img
        src={`data:image/jpg;base64,${habitat.image_data}`}
        alt={habitat.nom}
      />
    </div>
  );
};

export default VignetteHabitat;

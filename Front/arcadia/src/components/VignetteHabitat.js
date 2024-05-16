import React from "react";

const VignetteHabitat = ({ habitat }) => {
  return (
    <div className="habitat">
      <span className="span-habitat">{habitat.nom}</span>
      <img src={habitat.image_path} alt={`habitat ${habitat.nom}`} />
    </div>
  );
};

export default VignetteHabitat;

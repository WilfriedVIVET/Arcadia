import React from "react";

const VignetteHabitat = ({ habitat }) => {
  console.log("test path ", habitat.image_path);
  return (
    <div className="habitat">
      <span className="span-habitat">{habitat.nom}</span>
      <img
        src={`${process.env.REACT_APP_API}/${habitat.image_path}`}
        alt={habitat.nom}
      />
    </div>
  );
};

export default VignetteHabitat;

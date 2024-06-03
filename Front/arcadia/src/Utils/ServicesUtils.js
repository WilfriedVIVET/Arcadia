import axios from "axios";

//Update d'un service.
export const updateService = async (serviceUpdated) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Update/updateService.php",
      JSON.stringify(serviceUpdated)
    );
    return response.data.message;
  } catch (error) {
    alert(error);
    throw error;
  }
};

//Suppression d'un service.
export const deleteService = async (serviceDelete) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Delete/deleteService.php",
      JSON.stringify(serviceDelete)
    );
    return response.data.message;
  } catch (error) {
    alert(error);
    throw error;
  }
};

//Ajout d'un nouveau service.
export const createService = async (newService) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Create/createService.php",
      JSON.stringify(newService)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

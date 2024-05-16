import axios from "axios";

//Update d'un service.
export const updateService = async (serviceUpdated) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/updateService.php",
      JSON.stringify(serviceUpdated)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

//Suppression d'un service.
export const deleteService = async (serviceDelete) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/deleteService.php",
      JSON.stringify(serviceDelete)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

//Ajout d'un nouveau service.
export const createService = async (newService) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/createService.php",
      JSON.stringify(newService)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

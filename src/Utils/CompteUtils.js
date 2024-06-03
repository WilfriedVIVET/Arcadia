import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

//Création compte.
export const postNewCompte = async (newUser) => {
  try {
    const response = await axios.post(
      API + "/Post/postAccount.php",
      JSON.stringify(newUser)
    );
    return response.data.message;
  } catch (error) {
    alert(error);
    throw error;
  }
};

//Récupération du role de l'utilisateur connecté.
export const getRole = async (account) => {
  try {
    const response = await axios.post(
      API + "/getRole.php",
      JSON.stringify(account)
    );
    return response.data.role;
  } catch (error) {
    alert(error);
    throw error;
  }
};

//Modification de l'utilisateur.
export const updateUser = async (account) => {
  try {
    const response = await axios.post(
      API + "/Update/updateUser.php",
      JSON.stringify(account)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

//Suppression d'un utilisateur.
export const deleteUser = async (account) => {
  try {
    const response = await axios.post(
      API + "/Delete/deleteUser.php",
      JSON.stringify(account)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

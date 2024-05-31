import axios from "axios";

//Création compte.
export const postNewCompte = async (newUser) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/Post/postAccount.php",
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
      "http://localhost/API_ARCADIA/getRole.php",
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
      "http://localhost/API_ARCADIA/Update/updateUser.php",
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
      "http://localhost/API_ARCADIA/Delete/deleteUser.php",
      JSON.stringify(account)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

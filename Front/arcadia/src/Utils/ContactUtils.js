import axios from "axios";
const API = process.env.API_CONNECT || "http://localhost/API_ARCADIA";

//Prise de contact.
export const postContact = async (contact) => {
  try {
    const response = await axios.post(
      API + "/Post/postContact.php",
      JSON.stringify(contact)
    );
    return response.data.message;
  } catch (error) {
    alert(error);
    throw error;
  }
};

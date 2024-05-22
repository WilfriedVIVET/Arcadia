import axios from "axios";

//Prise de contact.
export const postContact = async (contact) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/postContact.php",
      JSON.stringify(contact)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
    throw error;
  }
};

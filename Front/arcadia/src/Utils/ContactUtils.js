import axios from "axios";

//Prise de contact.
export const postContact = async (contact) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/Post/postContact.php",
      JSON.stringify(contact)
    );
    return response.data.message;
  } catch (error) {
    alert(error);
    throw error;
  }
};

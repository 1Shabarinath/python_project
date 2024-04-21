import axios from "axios";
import { api_url } from "../config";

export const StoreContact = async (formData) => {
  console.log(formData);
  try {
    const response = await axios.post(
      `${api_url}engagement/contact/`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};

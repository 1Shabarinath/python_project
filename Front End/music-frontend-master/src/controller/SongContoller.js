import axios from "axios";
import { api_url } from "../config";

export const getSongsByAlbumId = async (id) => {
  try {
    const response = await axios.get(
      `${api_url}music/songs-by-album/?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};

import axios from "axios";
import { api_url } from "../config";

export const getArtists = async () => {
  try {
    const response = await axios.get(`${api_url}music/artists/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};

export const getAlbums = async () => {
  try {
    const response = await axios.get(`${api_url}music/albums/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};

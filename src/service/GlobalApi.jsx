
import axios from "axios";

// Correct API base URL for Text Search
const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";

// Function to fetch place details
export const GetPlaceDetails = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query, // Search query (e.g., location name)
        key: "AIzaSyCXHXmYvqZ-TwrFL4PEh_dvPolSuC_PgrQ", // Your API key
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching place details:", error);
    throw error;
  }
};

import axios from "axios";

export const checkHealth = async () => {
  try {
    const response = await axios.get("/api/health");
    return response.data;
  } catch (error) {
    console.error(`Health check failed: `, error);
    throw error;
  }
};

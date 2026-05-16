import apiClient from "./apiClient";

export const getEntries = async () => {
  const response = await apiClient.get("/entries");

  return response.data;
};

export const createEntry = async (data) => {
  const response = await apiClient.post("/entries", data);

  return response.data;
};
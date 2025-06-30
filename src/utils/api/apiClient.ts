import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://randomuser.me/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchRandomUser = async () => {
  const response = await apiClient.get("?results=1&nat=us");
  return response.data.results[0];
};

import axios from "axios";

const API_URL = "https://dummyjson.com/auth/";

export const login = async (username: string, password: string) => {
  const response = await axios.post(API_URL + "login", {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

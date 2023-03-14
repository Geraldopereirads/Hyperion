import axios from "axios";

export const api = axios.create({
  baseURL: "https://hyperion-api.onrender.com",
  timeout: 15000,
});

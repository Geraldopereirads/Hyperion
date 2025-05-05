import axios from "axios";

export const api = axios.create({
  baseURL: "https://hyperion-api-4955.onrender.com/",
  timeout: 15000,
});

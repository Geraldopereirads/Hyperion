import axios from "axios";

export const api = axios.create({
  baseURL: "https://hyperion-api-hze8.onrender.com/",
  timeout: 15000,
});

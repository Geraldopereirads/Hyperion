import axios from "axios";

export const api = axios.create({
  baseURL: "https://hyperion-api-one.vercel.app/",
  timeout: 15000,
});

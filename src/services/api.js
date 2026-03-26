import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-3330.up.railway.app/"
});

export default API;

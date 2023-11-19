import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default instance;

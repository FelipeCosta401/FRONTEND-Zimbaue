import axios from "axios";

const MyAxios = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default MyAxios;

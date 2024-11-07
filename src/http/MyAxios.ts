import axios from "axios";

const token = localStorage.getItem("token");

const MyAxios = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default MyAxios;

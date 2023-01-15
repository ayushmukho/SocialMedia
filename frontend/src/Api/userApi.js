import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });

const headerOptions = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = (email, password) => API.post("/login", { email, password }, headerOptions);
export const loadUser = () => API.get("/me", { withCredentials: true });

export const getPostOfFollowing = () => API.get("/posts", { withCredentials: true })
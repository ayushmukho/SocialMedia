import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });

const headerOptions = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = (email, password) => API.post("/login", { email, password }, headerOptions);
export const register = (name, email, password, avatar) => API.post("/register", { name, email, password, avatar }, headerOptions);
export const loadUser = () => API.get("/me", { withCredentials: true });
export const logout = () => API.get("/logout", { withCredentials: true });

export const getAllUsers = () => API.get("/users", { withCredentials: true });

export const getPostOfFollowing = () =>
  API.get("/posts", { withCredentials: true });

export const getMyPosts = () => API.get("/my/posts", { withCredentials: true });

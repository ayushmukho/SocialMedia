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

export const getAllUsers = (name) => API.get(`/users?name=${name}`, { withCredentials: true });

export const getPostOfFollowing = () =>
  API.get("/posts", { withCredentials: true });

export const getMyPosts = () => API.get("/my/posts", { withCredentials: true });
export const getUserPosts = (id) => API.get(`/userposts/${id}`, { withCredentials: true });
export const getUserProfile = (id) => API.get(`/user/${id}`, { withCredentials: true });
export const updateProfile = (name, email, avatar) => API.put("/update/profile", { name, email, avatar }, headerOptions);
export const updatePassword = (oldPassword, newPassword) => API.put("/update/password", { oldPassword, newPassword }, headerOptions);
export const deleteUser = () => API.delete("/delete/me", { withCredentials: true });
export const forgotPassword = (email) => API.post("/forgot/password", { email }, headerOptions);
export const followAndUnfollowUser = (id) => API.get(`/follow/${id}`, { withCredentials: true });
export const resetPassword = (token, password) => API.put(`/password/reset/${token}`, { password }, headerOptions);

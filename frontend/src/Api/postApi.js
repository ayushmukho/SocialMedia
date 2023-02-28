import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api/v1" });

const headerOptions = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export const likePost = (id) => API.get(`/post/${id}`, { withCredentials: true });
export const addCommentOnPost = (id, comment) => API.put(`/post/comment/${id}`, { comment }, headerOptions);
export const deleteCommentOnPost = (postId, commentId) => axios.delete(`api/v1/post/comment/${postId}`, { commentId });
export const createNewPost = (caption, image) => API.post('/post/upload', { caption, image }, headerOptions);
export const updatePostCaption = (caption, id) => API.put(`post/${id}`, {caption}, headerOptions);

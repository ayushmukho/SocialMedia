const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  addCommentOrUpdate,
  deleteComment,
} = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);

router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router
  .route("/post/comment/:id")
  .put(isAuthenticated, addCommentOrUpdate)
  .delete(isAuthenticated, deleteComment);

module.exports = router;

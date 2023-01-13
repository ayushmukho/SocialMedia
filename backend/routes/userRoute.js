const express = require("express");
const {
  register,
  login,
  followOrUnfollowUser,
  logout,
  updatePassword,
  updateProfile,
  deleteProfile,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated, followOrUnfollowUser);

router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/delete/me").delete(isAuthenticated, deleteProfile);

module.exports = router;

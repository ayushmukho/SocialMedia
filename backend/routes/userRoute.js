const express = require("express");
const {
  register,
  login,
  followOrUnfollowUser,
  logout,
  updatePassword,
  updateProfile,
  deleteProfile,
  myProfile,
  getUserDetails,
  getAllUsers,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated, followOrUnfollowUser);

router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/me").get(isAuthenticated, myProfile);
router.route("/delete/me").delete(isAuthenticated, deleteProfile);
 
router.route("/user/:id").get(isAuthenticated, getUserDetails);
router.route("/users").get(isAuthenticated, getAllUsers);

router.route("/forgot/password").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)

module.exports = router;

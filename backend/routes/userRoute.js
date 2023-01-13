const express = require("express");
const {
  register,
  login,
  followOrUnfollowUser,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/follow/:id").get(isAuthenticated, followOrUnfollowUser);

module.exports = router;

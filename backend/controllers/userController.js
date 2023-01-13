const User = require("../models/User");
const Post = require("../models/Post");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({
        success: false,
        message: "User already exists",
      });
    }

    user = await User.create({
      name,
      email,
      password,
      avatar: { public_id: "req.body.public_id", url: "req.body.url" },
    });

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User dosen't exists",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    res.status(200).cookie("token", null, options).json({
      success: true,
      message: "Logged out",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.followOrUnfollowUser = async (req, res) => {
  try {
    const userToFollow = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req.user._id);

    if (!userToFollow) {
      return res.status(404).json({
        success: false,
        message: "User don't exixts",
      });
    }

    //Unfollow
    if (loggedInUser.following.includes(userToFollow._id)) {
      const indexFollowing = loggedInUser.following.indexOf(userToFollow._id);
      loggedInUser.following.splice(indexFollowing, 1);

      const indexFollower = userToFollow.followers.indexOf(loggedInUser._id);
      userToFollow.followers.splice(indexFollower, 1);

      await loggedInUser.save();
      await userToFollow.save();

      res.status(200).json({
        success: true,
        message: "User Unfollowed",
      });

      //Follow
    } else {
      loggedInUser.following.push(userToFollow._id);
      userToFollow.followers.push(loggedInUser._id);

      await loggedInUser.save();
      await userToFollow.save();

      res.status(200).json({
        success: true,
        message: "User Followed",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("+password");
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(404).json({
        success: false,
        message: "Please provide old and newPassword",
      });
    }

    const isMatch = await user.matchPassword(oldPassword);

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Incorrect Old Password",
      });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { name, email } = req.body;

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    //User Avatar To do

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const posts = user.posts;

    await user.remove();

    //Logout User
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    res.cookie("token", null, options);

    //Delete all post of user
    for (let i = 0; i < posts.length(); i++) {
      const post = await Post.findById(posts[i]);
      await post.remove();
    }

    res.staus(200).json({
      success: true,
      message: "Profile Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("posts");
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

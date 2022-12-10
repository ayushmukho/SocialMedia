const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const newPostData = {
      caption: req.body.caption,
      image: {
        public_id: "req.body.public_id",
        url: "req.body.url",
      },
      owner: req.user._id,
    };

    const newPost = await Post.create(newPostData);

    //Push into POST array of the login user --refer the Schema of user
    

    res.status(201).json({
      success: true,
      post: newPost,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

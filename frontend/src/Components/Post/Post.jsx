import {
  ChatBubbleOutline,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
  MoreVert,
} from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { likePost } from "../../Redux/Actions/postAction";
import { getPostOfFollowing } from "../../Redux/Actions/userActions";

import "./Post.css";

const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  ownerName,
  ownerId,
  isDelete = false,
  isAccount = false,
}) => {
  //hooks
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [likesUser, setLikesUser] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const [captionValue, setCaptionValue] = useState(caption);
  const [captionToggle, setCaptionToggle] = useState(false);

  const { user } = useSelector((state) => state.user);

  //handlers
  const handleLike = async () => {
    setLiked((prev) => !prev);
    await dispatch(likePost(postId));

    if (isAccount) {
      console.log("Bring my Post .....");
    } else {
      dispatch(getPostOfFollowing());
    }
  };

  useEffect(() => {
    likes.forEach((item) => {
      if (item._id === user._id) setLiked(true);
    });
  }, [likes, user._id]);

  //jsx
  return (
    <div className="post">
      <div className="postHeader">
        {isAccount && (
          <Button onClick={() => setCaptionToggle(!captionToggle)}>
            <MoreVert />
          </Button>
        )}
      </div>
      <img src={postImage} alt="Post" />
      <div className="postDetails">
        <Avatar
          src={ownerImage}
          alt="User"
          sx={{
            height: "3vmax",
            width: "3vmax",
          }}
        />

        <Link to={`/user/${ownerId}`}>
          <Typography fontWeight={700}>{ownerName}</Typography>
        </Link>

        <Typography
          fontWeight={100}
          color="rgba(0, 0, 0, 0.582)"
          style={{ alignSelf: "center" }}
        >
          {caption}
        </Typography>
      </div>
      {/* <button
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}
      ></button> */}
      <div className="postFooter">
        <Button size="small" sx={{ left: "0px", padding: 0 }}>
          <Typography style={{ fontSize: "20px" }}>{likes.length}</Typography>
        </Button>

        <Button size="small" onClick={handleLike}>
          {liked ? <Favorite style={{ color: "red" }} /> : <FavoriteBorder />}
        </Button>

        <Button size="small">
          <ChatBubbleOutline />
        </Button>

        {isDelete ? (
          <Button size="small">
            <DeleteOutline />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Post;

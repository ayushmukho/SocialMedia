import {
  ChatBubbleOutline,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
  MoreVert,
} from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [liked, setLiked] = useState(false);
  const [likesUser, setLikesUser] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const [captionValue, setCaptionValue] = useState(caption);
  const [captionToggle, setCaptionToggle] = useState(false);

  //handlers
  const handleLike = () => {
    setLiked((prev) => !prev);
  };

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
        <Typography style={{ fontSize: "20px" }}>5</Typography>
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

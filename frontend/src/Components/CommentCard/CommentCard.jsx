import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts, getPostOfFollowing } from "../../Redux/Actions/userActions";
import "./CommentCard.css";
import { deleteCommentOnPost } from "../../Redux/Actions/postAction";

const CommentCard = ({
  userId,
  name,
  avatar,
  comment,
  commentId,
  postId,
  isAccount,
}) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const deleteCommentHandle = async () => {
    await dispatch(deleteCommentOnPost(postId, commentId));
    if (isAccount) {
      dispatch(getMyPosts());
    } else {
      dispatch(getPostOfFollowing());
    }
  };

  return (
    <div className="commentUser">
      <Link to={`/user/${userId}`}>
        <img src={avatar} alt={name} />
        <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
      </Link>
      <Typography>{comment}</Typography>

      {isAccount ? (
        <Button onClick={deleteCommentHandle}>
          <Delete />
        </Button>
      ) : userId === user._id ? (
        <Button onClick={deleteCommentHandle}>
          <Delete />
        </Button>
      ) : null}
    </div>
  );
};

export default CommentCard;

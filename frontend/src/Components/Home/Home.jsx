import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  getPostOfFollowing,
} from "../../Redux/Actions/userActions";
import Loader from "../Loader/Loader";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";

const Home = () => {
  //hooks
  const dispatch = useDispatch();
  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  );
  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

  //handlers
  useEffect(() => {
    dispatch(getPostOfFollowing());
    dispatch(getAllUsers());
  }, [dispatch]);

  //jsx
  return loading || usersLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {posts && posts.length > 0 ? (
          posts.map((post, idx) => (
            <Post
              key={idx}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownerName={post.owner.name}
              ownerId={post.owner._id}
            />
          ))
        ) : (
          <Typography>No Post yet</Typography>
        )}
      </div>
      <div className="homeright">
        {users && users.length > 0 ? (
          users.map((user, idx) => (
            <User
              key={idx}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
          ))
        ) : (
          <Typography>Follow Someone</Typography>
        )}
      </div>
    </div>
  );
};

export default Home;

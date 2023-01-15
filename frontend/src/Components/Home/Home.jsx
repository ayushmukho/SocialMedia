import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostOfFollowing } from "../../Redux/Actions/userActions";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";

const Home = () => {
  //hooks
  //const { users, loading: usersLoading } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  //handlers
  useEffect(() => {
    dispatch(getPostOfFollowing())
  }, [])

  //jsx
  return (
    <div className="home">
      <div className="homeleft">
        <Post
          //key={"post._id"}
          postId={"post._id"}
          caption={"post.caption"}
          postImage={
            "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lhbnQlMjBwYW5kYXxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          likes={"post.likes"}
          comments={"post.comments"}
          ownerImage={
            "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lhbnQlMjBwYW5kYXxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          ownerName={"post.owner.name"}
          ownerId={"post.owner._id"}
        />
      </div>
      <div className="homeright">
        <User
          userId={"user._id"}
          name={"user.name"}
          avatar={"user.avatar.url"}
        />
      </div>
    </div>
  );
};

export default Home;

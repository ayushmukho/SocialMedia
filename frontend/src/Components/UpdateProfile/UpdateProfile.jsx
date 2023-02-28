import { Avatar, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { loadUser, updateProfile } from "../../Redux/Actions/userActions";
import Loader from "../Loader/Loader";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  //hooks
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  const {
    loading: updateLoading,
    error: updateError,
    message,
  } = useSelector((state) => state.likeAndComment);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState("");
  const [avatarPrev, setAvatarPrev] = useState(user.avatar.url);


  //handlers
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatarPrev(Reader.result);

        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(name, email, avatar));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch({ type: "clearErrors" });
    }

    if (updateError) {
      toast.error(updateError, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, updateError, message]);

  //jsx
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="updateProfile">
        <form className="updateProfileForm" onSubmit={submitHandler}>
          <Typography variant="h3" style={{ padding: "2vmax" }}>
            Social Media
          </Typography>

          <Avatar
            src={avatarPrev}
            alt="User"
            sx={{ height: "10vmax", width: "10vmax" }}
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />

          <input
            type="text"
            value={name}
            placeholder="Name"
            className="updateProfileInputs"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="updateProfileInputs"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button disabled={updateLoading} type="submit">
            Update
          </Button>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default UpdateProfile;

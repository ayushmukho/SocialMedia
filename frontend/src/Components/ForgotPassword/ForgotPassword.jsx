import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { forgotPassword } from "../../Redux/Actions/userActions";

import "./ForgotPassword.css";
const ForgotPassword = () => {
  //hooks
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector(
    (state) => state.likeAndComment
  );

  //handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
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
  }, [error, dispatch, message]);

  //jsx
  return (
    <>
      <div className="forgotPassword">
        <form className="forgotPasswordForm" onSubmit={submitHandler}>
          <Typography variant="h3" style={{ padding: "2vmax" }}>
            Social Media
          </Typography>

          <input
            type="email"
            placeholder="Email"
            required
            className="forgotPasswordInputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button disabled={loading} type="submit">
            Send Token
          </Button>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default ForgotPassword;

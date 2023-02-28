import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { loginUser } from "../../Redux/Actions/userActions";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.user);

  //handlers
  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch({ type: "clearErrors" });
    }
  }, [error, dispatch]);

  return (
    <>
      <div className="login">
        <form className="loginForm" onSubmit={loginHandler}>
          <Typography variant="h3" style={{ padding: "2vmax" }}>
            Social Media
          </Typography>

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link to="/forgot/password">
            <Typography>Forgot Password?</Typography>
          </Link>

          <Button type="submit">Login</Button>

          <Link to="/register">
            <Typography>New User?</Typography>
          </Link>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default Login;

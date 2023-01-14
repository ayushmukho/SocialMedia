import { createReducer, createAction } from "@reduxjs/toolkit";

const LoginRequest = createAction("LoginRequest");
const LoginSuccess = createAction("LoginSuccess");
const LoginFailure = createAction("LoginFailure");

const RegisterRequest = createAction("RegisterRequest");
const RegisterSuccess = createAction("RegisterSuccess");
const RegisterFailure = createAction("RegisterFailure");

const LoadUserRequest = createAction("LoadUserRequest");
const LoadUserSuccess = createAction("LoadUserSuccess");
const LoadUserFailure = createAction("LoadUserFailure");

const initialState = {};

export const userReducer = createReducer(initialState, (builder) => {
  //Login User
  builder
    .addCase(LoginRequest, (state) => {
      state.loading = true;
    })
    .addCase(LoginSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(LoginFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Register User
    .addCase(RegisterRequest, (state) => {
      state.loading = true;
    })
    .addCase(RegisterSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(RegisterFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Load User
    .addCase(LoadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(LoadUserSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(LoadUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

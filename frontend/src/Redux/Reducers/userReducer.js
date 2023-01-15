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

const PostOfFollowingRequest = createAction("PostOfFollowingRequest");
const PostOfFollowingSuccess = createAction("PostOfFollowingSuccess");
const PostOfFollowingFailure = createAction("PostOfFollowingFailure");

const ClearErrors = createAction("ClearErrors");

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  //Login User
  builder
    .addCase(LoginRequest, (state) => {
      state.loading = true;
    })
    .addCase(LoginSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(LoginFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    //Register User
    .addCase(RegisterRequest, (state) => {
      state.loading = true;
    })
    .addCase(RegisterSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(RegisterFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    //Load User
    .addCase(LoadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(LoadUserSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(LoadUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    //Error 
    .addCase(ClearErrors, (state) => {
      state.error = null;
    });
});

export const postOfFollowingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(PostOfFollowingRequest, (state) => {
      state.loading = true;
    })
    .addCase(PostOfFollowingSuccess, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(PostOfFollowingFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    //Error 
    .addCase(ClearErrors, (state) => {
      state.error = null;
    });
});

import { createReducer, createAction } from "@reduxjs/toolkit";

const LikeRequest = createAction("LikeRequest");
const LikeSuccess = createAction("LikeSuccess");
const LikeFailure = createAction("LikeFailure");

const AddCommentRequest = createAction("AddCommentRequest");
const AddCommentSuccess = createAction("AddCommentSuccess");
const AddCommentFailure = createAction("AddCommentFailure");

const DeleteCommentRequest = createAction("DeleteCommentRequest");
const DeleteCommentSuccess = createAction("DeleteCommentSuccess");
const DeleteCommentFailure = createAction("DeleteCommentFailure");

const NewPostRequest = createAction("NewPostRequest");
const NewPostSuccess = createAction("NewPostSuccess");
const NewPostFailure = createAction("NewPostFailure");

const UpdateCaptionRequest = createAction("UpdateCaptionRequest");
const UpdateCaptionSuccess = createAction("UpdateCaptionSuccess");
const UpdateCaptionFailure = createAction("UpdateCaptionFailure");

const DeletePostRequest = createAction("DeletePostRequest");
const DeletePostSuccess = createAction("DeletePostSuccess");
const DeletePostFailure = createAction("DeletePostFailure");

const UpdateProfileRequest = createAction("UpdateProfileRequest");
const UpdateProfileSuccess = createAction("UpdateProfileSuccess");
const UpdateProfileFailure = createAction("UpdateProfileFailure");

const UpdatePasswordRequest = createAction("UpdatePasswordRequest");
const UpdatePasswordSuccess = createAction("UpdatePasswordSuccess");
const UpdatePasswordFailure = createAction("UpdatePasswordFailure");

const DeleteUserRequest = createAction("DeleteUserRequest");
const DeleteUserSuccess = createAction("DeleteUserSuccess");
const DeleteUserFailure = createAction("DeleteUserFailure");

const ForgotPasswordRequest = createAction("ForgotPasswordRequest");
const ForgotPasswordSuccess = createAction("ForgotPasswordSuccess");
const ForgotPasswordFailure = createAction("ForgotPasswordFailure");

const ResetPasswordRequest = createAction("ResetPasswordRequest");
const ResetPasswordSuccess = createAction("ResetPasswordSuccess");
const ResetPasswordFailure = createAction("ResetPasswordFailure");

const FollowUserRequest = createAction("FollowUserRequest");
const FollowUserSuccess = createAction("FollowUserSuccess");
const FollowUserFailure = createAction("FollowUserFailure");

const ClearMessage = createAction("ClearMessage");
const ClearErrors = createAction("ClearErrors");

const initialState = {};

export const likeAndCommentReducer = createReducer(initialState, (builder) => {
  builder
    //Like
    .addCase(LikeRequest, (state) => {
      state.loading = true;
    })
    .addCase(LikeSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(LikeFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Comment add and delete
    .addCase(AddCommentRequest, (state) => {
      state.loading = true;
    })
    .addCase(AddCommentSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(AddCommentFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(DeleteCommentRequest, (state) => {
      state.loading = true;
    })
    .addCase(DeleteCommentSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DeleteCommentFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //New Post
    .addCase(NewPostRequest, (state) => {
      state.loading = true;
    })
    .addCase(NewPostSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(NewPostFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Update Caption
    .addCase(UpdateCaptionRequest, (state) => {
      state.loading = true;
    })
    .addCase(UpdateCaptionSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UpdateCaptionFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Delete Post
    .addCase(DeletePostRequest, (state) => {
      state.loading = true;
    })
    .addCase(DeletePostSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DeletePostFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Update Profile
    .addCase(UpdateProfileRequest, (state) => {
      state.loading = true;
    })
    .addCase(UpdateProfileSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UpdateProfileFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Update Password
    .addCase(UpdatePasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(UpdatePasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UpdatePasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Delete User
    .addCase(DeleteUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(DeleteUserSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DeleteUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //ForgotPassword
    .addCase(ForgotPasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(ForgotPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ForgotPasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Reset Password
    .addCase(ResetPasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(ResetPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ResetPasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Follow User
    .addCase(FollowUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(FollowUserSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(FollowUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    //Error
    .addCase(ClearErrors, (state) => {
      state.error = null;
    })
    .addCase(ClearMessage, (state) => {
      state.message = null;
    });
});

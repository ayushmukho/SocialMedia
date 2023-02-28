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

    //UpdateCaption
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

    //Error
    .addCase(ClearErrors, (state) => {
      state.error = null;
    })
    .addCase(ClearMessage, (state) => {
      state.message = null;
    });
});

import { createReducer, createAction } from "@reduxjs/toolkit";

const LikeRequest = createAction("LikeRequest");
const LikeSuccess = createAction("LikeSuccess");
const LikeFailure = createAction("LikeFailure");

const AddCommentRequest = createAction("AddCommentRequest");
const AddCommentSuccess = createAction("AddCommentSuccess");
const AddCommentFailure = createAction("AddCommentFailure"); 

const ClearMessage = createAction("ClearMessage");
const ClearErrors = createAction("ClearErrors");

const initialState = {};

export const likeAndCommentReducer = createReducer(initialState, (builder) => {
  builder
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
    .addCase(ClearErrors, (state) => {
      state.error = null;
    })
    .addCase(ClearMessage, (state) => {
      state.message = null;
    });
});

import { configureStore } from "@reduxjs/toolkit";
import { likeAndCommentReducer } from "./Redux/Reducers/postReducer";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userReducer,
} from "./Redux/Reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likeAndComment: likeAndCommentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { likeAndCommentReducer } from "./Redux/Reducers/postReducer";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userReducer,
  myPostsReducer,
} from "./Redux/Reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likeAndComment: likeAndCommentReducer,
    myPosts: myPostsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

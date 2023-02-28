import { configureStore } from "@reduxjs/toolkit";
import { likeAndCommentReducer } from "./Redux/Reducers/postReducer";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userReducer,
  myPostsReducer,
  userProfileReducer,
  userPostsReducer,
} from "./Redux/Reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    likeAndComment: likeAndCommentReducer,
    myPosts: myPostsReducer,
    userProfile: userProfileReducer,
    userPosts: userPostsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

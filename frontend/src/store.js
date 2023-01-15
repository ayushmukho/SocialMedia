import { configureStore } from "@reduxjs/toolkit";
import {
  postOfFollowingReducer,
  userReducer,
} from "./Redux/Reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

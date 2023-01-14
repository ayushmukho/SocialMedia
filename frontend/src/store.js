import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Redux/Reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

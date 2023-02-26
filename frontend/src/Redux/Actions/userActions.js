import * as userApi from "../../Api/userApi";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LoginRequest" });

    const { data } = await userApi.login(email, password);

    dispatch({ type: "LoginSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "LoginFailure", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    const { data } = await userApi.loadUser();

    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "LoadUserFailure", payload: error.response.data.message });
  }
};

export const getPostOfFollowing = () => async (dispatch) => {
  try {
    dispatch({ type: "PostOfFollowingRequest" });

    const { data } = await userApi.getPostOfFollowing();

    dispatch({ type: "PostOfFollowingSuccess", payload: data.posts });

  } catch (error) {
    dispatch({ type: "PostOfFollowingFailure", payload: error.response.data.message });
  }
}

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "AllUserRequest" });

    const { data } = await userApi.getAllUsers();

    dispatch({ type: "AllUserSuccess", payload: data.users });
  } catch (error) {
    dispatch({ type: "AllUserFailure", payload: error.response.data.message });
  }
}

export const getMyPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "MyPostsRequest" });

    const { data } = await userApi.getMyPosts();

    dispatch({ type: "MyPostsSuccess", payload: data.posts });

  } catch (error) {
    dispatch({ type: "MyPostsFailure", payload: error.response.data.message });
  }
}


export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LogoutUserRequest" });

    await userApi.logout();

    dispatch({ type: "LogoutUserSuccess" });
  } catch (error) {
    dispatch({ type: "LogoutUserFailure", payload: error.response.data.message });
  }
};


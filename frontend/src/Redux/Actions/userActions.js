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

export const registerUser = (name, email, password, avatar) => async (dispatch) => {
  try {
    dispatch({ type: "RegisterRequest" });

    const { data } = await userApi.register(name, email, password, avatar);

    dispatch({ type: "RegisterSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "RegisterFailure", payload: error.response.data.message });
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

export const updateProfile = (name, email, avatar) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateProfileRequest" });

    const { data } =await userApi.updateProfile(name, email, avatar);

    dispatch({ type: "UpdateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "UpdateProfileFailure", payload: error.response.data.message });
  }
};

export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch({ type: "UpdatePasswordRequest" });

    const { data } = await userApi.updatePassword(oldPassword, newPassword);

    dispatch({ type: "UpdatePasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "UpdatePasswordFailure", payload: error.response.data.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteUserRequest" });

    const { data } = await userApi.deleteUser();

    dispatch({ type: "DeleteUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "DeleteUserFailure", payload: error.response.data.message });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "ForgotPasswordRequest" });

    const { data } = await userApi.forgotPassword(email);

    dispatch({ type: "ForgotPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "ForgotPasswordFailure", payload: error.response.data.message });
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: "ResetPasswordRequest" });

    const { data } = await userApi.resetPassword(token, password);

    dispatch({ type: "ResetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "ResetPasswordFailure", payload: error.response.data.message });
  }
};


export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({ type: "UserPostsRequest" });

    const { data } = await userApi.getUserPosts(id);

    dispatch({ type: "UserPostsSuccess", payload: data.posts });

  } catch (error) {
    dispatch({ type: "UserPostsFailure", payload: error.response.data.message });
  }
}

export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: "UserProfileRequest" });

    const { data } = await userApi.getUserProfile(id);

    dispatch({ type: "UserProfileSuccess", payload: data.user });

  } catch (error) {
    dispatch({ type: "UserProfileFailure", payload: error.response.data.message });
  }
}

export const followAndUnfollowUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FollowUserRequest" });

    const { data } = await userApi.followAndUnfollowUser(id);

    dispatch({ type: "FollowUserSuccess", payload: data.user });

  } catch (error) {
    dispatch({ type: "FollowUserFailure", payload: error.response.data.message });
  }
}
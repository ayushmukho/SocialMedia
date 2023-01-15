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


import * as userApi from "../../Api/userApi";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LoginRequest" });

    const { data } = await userApi.login(email, password);

    dispatch({ type: "LoginSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "LoginFailure", payload: error });
  }
};

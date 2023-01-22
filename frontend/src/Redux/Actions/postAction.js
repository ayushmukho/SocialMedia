import * as postApi from "../../Api/postApi";

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LikeRequest" });

    const { data } = await postApi.likePost(id);

    dispatch({ type: "LikeSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "LikeFailure", payload: error.response.data.message });
  }
}


export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch({ type: "AddCommentRequest" });

    const { data } = await postApi.addCommentOnPost(id, comment);

    dispatch({ type: "AddCommentSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "AddCommentFailure", payload: error.response.data.message });
  }
}

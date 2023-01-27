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

export const deleteCommentOnPost = (postId, commentId) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteCommentRequest" });

    const { data } = await postApi.deleteCommentOnPost(postId, commentId)

    dispatch({ type: "DeleteCommentSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "DeleteCommentFailure", payload: error.response.data.message });
  }
}

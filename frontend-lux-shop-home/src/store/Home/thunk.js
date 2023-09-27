import actionTypes from "./actions/actionTypes";

export const openPopup = (productId) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.OPEN_POPUP,
      payload: productId,
    });
  } catch (e) {
    console.log(e);
  }
};

export const closePopup = (productId) => (dispatch) => {
  try {
    dispatch({
      type: actionTypes.CLOSE_POPUP,
      payload: productId,
    });
  } catch (e) {
    console.log(e);
  }
};

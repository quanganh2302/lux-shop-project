import actionTypes from "../actions/actionTypes";
import { produce } from "immer";
import { toast } from "react-toastify";


const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.FETCH_PRODUCT_SUCCESS) {
      draft.products = payload;
      // toast.success("Delete the user success");

    }
    return draft;
  });
};

export default productReducer;

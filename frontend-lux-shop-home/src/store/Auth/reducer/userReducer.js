import { produce } from "immer";
import actionTypes from "../actions/actionTypes";
const initialState = {
  userLogin: null,
  userSignUp: null,
};
const userReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.LOGIN) {
      draft.userLogin = payload;
    }
    if (type === actionTypes.SIGNUP) {
      draft.userSignUp = payload;
    }
    return draft;
  });
};
export default userReducer;

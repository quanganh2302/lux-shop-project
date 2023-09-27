import { produce } from "immer";
import actionTypes from "../actions/actionTypes";
import { LANGUAGE, CURRENCY } from "../../../utils/constant";
const initialState = {
  language: LANGUAGE.EN,
  currency: CURRENCY.USD,
  isPopupOpen: false,
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.CHANGE_LANGUAGE) {
      draft.language = payload;
    } else if (type === actionTypes.CHANGE_CURRENCY) {
      draft.currency = payload;
    } else if (type === actionTypes.OPEN_POPUP) {
      draft.isPopupOpen = true;
    } else if (type === actionTypes.CLOSE_POPUP) {
      draft.isPopupOpen = false;
    }
    return draft;
  });
};

export default reducer;

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../store/Home/reducer/homeReducer";
import userReducer from "./Auth/reducer/userReducer";
const reducer = combineReducers({
  homeReducer: homeReducer,
  userReducer: userReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

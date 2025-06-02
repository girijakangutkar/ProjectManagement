import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

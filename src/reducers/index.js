import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import introReducer from "./introReducer";
import aboutMeReducer from "./aboutMeReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    intro_post: introReducer,
    aboutme_post: aboutMeReducer
  });

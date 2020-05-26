import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { Lists } from "./lists";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      lists: Lists,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};

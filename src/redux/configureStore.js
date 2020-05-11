import { createStore, combineReducers } from "redux";
import { Items } from "./items";
import { Lists } from "./lists";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      items: Items,
      lists: Lists,
    })
  );

  return store;
};

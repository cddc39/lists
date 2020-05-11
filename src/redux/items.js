import { ITEMS } from "../shared/items";
import * as ActionTypes from "./ActionTypes";

export const Items = (state = ITEMS, action) => {
  switch (action.type) {
    case ActionTypes.SET_ITEM_COUNT:
      return setItemCount(state, action.payload);
    default:
      return state;
  }
};

const setItemCount = (state, payload) => {
  return state.map((item) => {
    if (item.id !== payload.itemId) {
      return item;
    }

    return {
      ...item,
      count: payload.itemCount,
    };
  });
};

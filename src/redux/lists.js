import { LISTS } from "../shared/lists";
import * as ActionTypes from "./ActionTypes";

export const Lists = (state = LISTS, action) => {
  switch (action.type) {
    case ActionTypes.SET_ITEM_COUNT:
      return setItemCount(state, action.payload);
    default:
      return state;
  }
};

const setItemCount = (state, payload) => {
  return state.map((list) => {
    if (list.id !== payload.listId) {
      return list;
    }

    return {
      ...list,
      items: list.items.map((item) => {
        if (item.id !== payload.itemId) {
          return item;
        }

        return {
          ...item,
          count: payload.itemCount,
        };
      }),
    };
  });
};

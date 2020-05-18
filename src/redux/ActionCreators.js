import * as ActionTypes from "./ActionTypes";

export const setItemCount = (listId, itemId, itemCount) => ({
  type: ActionTypes.SET_ITEM_COUNT,
  payload: {
    itemId: itemId,
    itemCount: itemCount,
    listId: listId,
  },
});

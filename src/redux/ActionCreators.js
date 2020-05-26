import * as ActionTypes from "./ActionTypes";
import baseUrl from "../shared/baseUrl";

export const fetchLists = () => (dispatch) => {
  dispatch(listsLoading());

  return fetch(baseUrl + "lists")
    .then((response) => response.json())
    .then(
      (lists) =>
        // setTimeout(() => {
        dispatch(addLists(lists))
      // }, 2000)
    );
};

export const listsLoading = () => ({
  type: ActionTypes.LISTS_LOADING,
});

export const listsFailed = (errMess) => ({
  type: ActionTypes.LISTS_FAILED,
  payload: errMess,
});

export const addLists = (lists) => ({
  type: ActionTypes.ADD_LISTS,
  payload: lists,
});

export const setItemCount = (listId, itemId, itemCount) => ({
  type: ActionTypes.SET_ITEM_COUNT,
  payload: {
    itemId: itemId,
    itemCount: itemCount,
    listId: listId,
  },
});

export const login = (loggedIn) => ({
  type: ActionTypes.LOGIN,
  payload: {
    loggedIn: loggedIn,
  },
});

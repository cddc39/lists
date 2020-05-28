import axios from "axios";

import * as ActionTypes from "./ActionTypes";
import baseUrl from "../shared/baseUrl";

export const fetchLists = () => (dispatch) => {
  dispatch(listsLoading());

  return axios
    .get(`${baseUrl}/lists`)
    .then(
      ({ data }) =>
        // setTimeout(() => {
        dispatch(addLists(data))
      // }, 2000)
    )
    .catch((error) => dispatch(listsFailed(error.message)));
};

export const postList = (list) => (dispatch) => {
  return axios
    .post(`${baseUrl}/lists`, list)
    .then(({ data }) => {
      console.log("resp", data);
      return dispatch(addList(data));
    })
    .catch((err) => {
      console.log(`post list: ${err.message}`);
    });
};

export const listsLoading = () => ({
  type: ActionTypes.LISTS_LOADING,
});

export const listsFailed = (error) => ({
  type: ActionTypes.LISTS_FAILED,
  payload: error,
});

export const addLists = (lists) => ({
  type: ActionTypes.ADD_LISTS,
  payload: lists,
});

export const addList = (list) => ({
  type: ActionTypes.ADD_LIST,
  payload: list,
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

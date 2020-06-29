import axios from "axios";

import * as ActionTypes from "./ActionTypes";
import baseUrl from "../shared/baseUrl";

// Account
export const login = (loggedIn) => ({
  type: ActionTypes.LOGIN,
  payload: {
    loggedIn: loggedIn,
  },
});

// Items
export const fetchItems = () => (dispatch) => {
  dispatch(itemsLoading());

  return axios
    .get(`${baseUrl}/items`)
    .then(
      ({ data }) =>
        // setTimeout(() => {
        dispatch(addItems(data))
      // }, 2000)
    )
    .catch((error) => dispatch(itemsFailed(error.message)));
};

export const postItem = (item) => (dispatch) => {
  return axios
    .post(`${baseUrl}/items`, item)
    .then(({ data }) => {
      return dispatch(addItem(data));
    })
    .catch((err) => {
      console.log(`post item: ${err.message}`);
    });
};

export const itemsLoading = () => ({
  type: ActionTypes.ITEMS_LOADING,
});

export const itemsFailed = (error) => ({
  type: ActionTypes.ITEMS_FAILED,
  payload: error,
});

export const addItems = (items) => ({
  type: ActionTypes.ADD_ITEMS,
  payload: items,
});

export const addItem = (item) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});

export const setItemCount = (itemId, count) => ({
  type: ActionTypes.SET_ITEM_COUNT,
  payload: {
    itemId: itemId,
    count: count,
  },
});

// Lists
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

import * as ActionTypes from "./ActionTypes";

export const Lists = (
  state = { isLoading: true, errMsg: null, lists: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LISTS:
      return {
        ...state,
        errMsg: null,
        isLoading: false,
        lists: action.payload,
      };
    case ActionTypes.LISTS_LOADING:
      return { ...state, errMsg: null, isLoading: true, lists: [] };
    case ActionTypes.LISTS_FAILED:
      return { ...state, errMsg: action.payload, isLoading: false };
    case ActionTypes.SET_ITEM_COUNT:
      return setItemCount(state, action.payload);
    case ActionTypes.LOGIN:
      return login(state, action.payload);
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

const login = (state, payload) => {
  return {
    ...state,
    loggedIn: payload.loggedIn,
  };
};

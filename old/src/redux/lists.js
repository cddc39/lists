import * as ActionTypes from "./ActionTypes";

export const Lists = (
  state = { loading: true, error: null, lists: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LISTS:
      return {
        ...state,
        error: null,
        loading: false,
        lists: action.payload,
      };
    case ActionTypes.ADD_LIST:
      return addList(state, action.payload);
    case ActionTypes.LISTS_LOADING:
      return { ...state, error: null, loading: true, lists: [] };
    case ActionTypes.LISTS_FAILED:
      return { ...state, error: action.payload, loading: false };
    case ActionTypes.LOGIN:
      return login(state, action.payload);
    default:
      return state;
  }
};

const addList = (state, payload) => {
  return {
    ...state,
    lists: [...state.lists, payload],
  };
};

const login = (state, payload) => {
  return {
    ...state,
    loggedIn: payload.loggedIn,
  };
};

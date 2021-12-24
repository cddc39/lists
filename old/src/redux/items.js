import * as ActionTypes from "./ActionTypes"

export const Items = (state = { loading: true, error: null, items: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEMS:
      return {
        ...state,
        error: null,
        loading: false,
        items: action.payload,
      }
    case ActionTypes.ITEMS_LOADING:
      return { ...state, error: null, loading: true, items: [] }
    case ActionTypes.ITEMS_FAILED:
      return { ...state, error: action.payload, loading: false }
    case ActionTypes.SET_ITEM_COUNT:
      return setItemCount(state, action.payload)
    default:
      return state
  }
}

const setItemCount = (state, payload) => {
  return {
    ...state,
    items: [
      ...state.items.map((item) => {
        if (item.id !== payload.itemId) {
          return item
        }

        return {
          ...item,
          count: payload.count,
        }
      }),
    ],
  }
}

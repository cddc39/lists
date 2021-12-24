import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import { Items } from "./items"
import { Lists } from "./lists"

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      items: Items,
      lists: Lists,
    }),
    applyMiddleware(thunk, logger)
  )

  return store
}

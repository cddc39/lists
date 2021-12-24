import { defineStore } from "pinia"
import { v4 as uuid } from "uuid"

export const useItemsStore = defineStore({
  id: "items",
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }],
  },
  state: () => ({ items: {}, filter: "" }),
  getters: {
    getItemsByList: (state) => {
      return (listName) => {
        return Object.values(state.items).filter((item) => {
          return item.listName === listName
        })
      }
    },
    getActiveItemsByList: (state) => {
      return (listName) => {
        return Object.values(state.getItemsByList(listName))
          .filter((item) => {
            return item.active
          })
          .filter((item) => {
            return item.name.toLowerCase().includes(state.filter)
          })
          .sort((a, b) => {
            return b.name < a.name
          })
      }
    },
    getInactiveItemsByList: (state) => {
      return (listName) => {
        return Object.values(state.getItemsByList(listName))
          .filter((item) => {
            return !item.active
          })
          .filter((item) => {
            return item.name.toLowerCase().includes(state.filter)
          })
          .sort((a, b) => {
            return a.inactiveDate < b.inactiveDate
          })
      }
    },
  },
  actions: {
    itemActivate(item) {
      item.active = true
      item.inactiveDate = ""
    },
    itemCreate(item) {
      item.id = uuid()
      item.inactiveDate = ""
      this.items[item.id] = item
    },
    itemDelete(item) {
      delete this.items[item.id]
    },
    itemInactivate(item) {
      item.active = false
      item.inactiveDate = Date.now()
    },
  },
})

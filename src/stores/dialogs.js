import { defineStore } from "pinia"

export const useDialogsStore = defineStore({
  id: "dialogs",
  state: () => ({ edit: false, item: {} }),
  getters: {},
  actions: {
    setDialog(item, dialog) {
      this[dialog] = true
      this.item = item
    },
  },
})

import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useListsStore = defineStore({
  id: "lists",
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }],
  },
  state: () => ({ lists: {} }),
  getters: {},
  actions: {
    createList(list) {
      list.id = uuid();
      this.lists[list.id] = list;
    },
    deleteList(list) {
      this.lists.splice(this.lists.indexOf(list), 1);
    },
  },
});

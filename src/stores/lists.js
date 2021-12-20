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
    listCreate(list) {
      list.id = uuid();
      this.lists[list.id] = list;
    },
    listDelete(list) {
      delete this.lists[list.id];
    },
  },
});
